import { onBeforeUnmount, ref } from "vue";

type Dimensions = { width: number; height: number };
type Transform = (
  bytes: Uint8Array,
  values: Record<string, number>,
) => Uint8Array;

export function useImageWorkbench() {
  const source = ref<File>();
  const sourceUrl = ref("");
  const sourceSize = ref<Dimensions>();
  const result = ref<File>();
  const resultUrl = ref("");
  const resultSize = ref<Dimensions>();
  const busy = ref(false);
  const error = ref("");
  const status = ref("");
  let revision = 0;
  const formatSize = (size: number) =>
    size < 1024 * 1024
      ? `${(size / 1024).toFixed(1)} KB`
      : `${(size / (1024 * 1024)).toFixed(1)} MB`;
  const revoke = (url: string) => {
    if (url) URL.revokeObjectURL(url);
  };
  function clearResult() {
    revision++;
    revoke(resultUrl.value);
    resultUrl.value = "";
    result.value = undefined;
    resultSize.value = undefined;
    error.value = "";
    status.value = source.value
      ? "Ready. Apply the operation to create a result."
      : "";
  }
  function clear() {
    clearResult();
    revoke(sourceUrl.value);
    sourceUrl.value = "";
    source.value = undefined;
    sourceSize.value = undefined;
    status.value = "";
    busy.value = false;
  }
  async function dimensions(url: string): Promise<Dimensions> {
    const image = new Image();
    image.src = url;
    await image.decode();
    return { width: image.naturalWidth, height: image.naturalHeight };
  }
  async function select(file: File) {
    clear();
    const request = revision;
    busy.value = true;
    let url = "";
    try {
      if (!["image/png", "image/jpeg"].includes(file.type))
        throw new Error("Choose a PNG or JPEG image.");
      url = URL.createObjectURL(file);
      const size = await dimensions(url);
      if (request !== revision) return;
      source.value = file;
      sourceUrl.value = url;
      sourceSize.value = size;
      url = "";
      status.value =
        "Image ready. Adjust the settings and apply the operation.";
    } catch (cause) {
      if (request === revision)
        error.value =
          cause instanceof Error &&
          cause.message === "Choose a PNG or JPEG image."
            ? cause.message
            : "This image could not be opened. Choose another PNG or JPEG.";
    } finally {
      revoke(url);
      if (request === revision) busy.value = false;
    }
  }
  async function onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (file) await select(file);
  }
  async function useSample() {
    clear();
    const request = revision;
    busy.value = true;
    try {
      const image = new Image();
      image.src = `${import.meta.env.BASE_URL}sample.svg`;
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = 960;
      canvas.height = 720;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Canvas unavailable");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob>((resolve, reject) =>
        canvas.toBlob(
          (value) =>
            value ? resolve(value) : reject(new Error("Sample unavailable")),
          "image/png",
        ),
      );
      if (request === revision)
        await select(
          new File([blob], "color-study.png", { type: "image/png" }),
        );
    } catch {
      if (request === revision) {
        error.value =
          "The sample could not be loaded. Choose an image from your device.";
        busy.value = false;
      }
    }
  }
  async function process(
    transform: Transform,
    values: Record<string, number>,
    operation: string,
  ) {
    if (!source.value || busy.value) return;
    clearResult();
    const request = revision;
    const file = source.value;
    busy.value = true;
    status.value = "Processing your image…";
    let url = "";
    try {
      if (Object.values(values).some((value) => !Number.isFinite(value)))
        throw new Error("Enter a number in every setting.");
      if (
        operation === "crop" &&
        sourceSize.value &&
        ((values.x ?? 0) + (values.width ?? 0) > sourceSize.value.width ||
          (values.y ?? 0) + (values.height ?? 0) > sourceSize.value.height)
      )
        throw new Error(
          "The crop extends beyond the image. Reduce its position or size.",
        );
      const bytes = new Uint8Array(await file.arrayBuffer());
      // Give the browser a paint opportunity before the synchronous WASM call.
      await new Promise((resolve) => setTimeout(resolve, 30));
      if (request !== revision) return;
      const output = new Uint8Array(transform(bytes, values));
      const png = output[0] === 137 && output[1] === 80;
      const type = png ? "image/png" : "image/jpeg";
      const name = `${file.name.replace(/\.[^.]+$/, "")}-${operation}.${png ? "png" : "jpg"}`;
      const processed = new File([output], name, { type });
      url = URL.createObjectURL(processed);
      const size = await dimensions(url);
      if (request !== revision) return;
      result.value = processed;
      resultUrl.value = url;
      resultSize.value = size;
      url = "";
      status.value = `Done. ${size.width} × ${size.height} pixels · ${formatSize(processed.size)}.`;
    } catch (cause) {
      if (request === revision) {
        const message = cause instanceof Error ? cause.message : "";
        error.value =
          message.startsWith("The crop") || message.startsWith("Enter a number")
            ? message
            : "This image could not be processed. Check the settings or choose another PNG or JPEG, then try again.";
        status.value = "Processing failed. You can try again.";
      }
    } finally {
      revoke(url);
      if (request === revision) busy.value = false;
    }
  }
  onBeforeUnmount(clear);
  return {
    source,
    sourceUrl,
    sourceSize,
    result,
    resultUrl,
    resultSize,
    busy,
    error,
    status,
    onFileChange,
    useSample,
    process,
    clearResult,
    clear,
    formatSize,
  };
}
