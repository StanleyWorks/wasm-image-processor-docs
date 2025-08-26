<script setup lang="ts">
import { ref } from "vue";
import { useFileSize } from "@/composables/useFileSize";
import { useIsLoading } from "@/composables/useIsLoading";
import { useCreateObjectUrl } from "@/composables/useCreateObjectUrl";

const previewUrl = ref<string | undefined>(undefined);
const picture = ref<File | undefined>(undefined);
const resizedImage = ref<File | undefined>(undefined);
const resizedImageUrl = ref<string | undefined>(undefined);
const side = ref<number | undefined>(undefined);

const onSubmit = () => {
  useIsLoading().value = true;
  const reader = new FileReader();
  reader.onload = async () => {
    const arrayBuffer = reader.result as ArrayBuffer;
    if (!arrayBuffer || !picture.value) {
      return;
    }
    const uint8Array = new Uint8Array(arrayBuffer);

    const resize = resize_square(uint8Array, side.value || 512);

    const filee = new File([resize], "resized", { type: picture.value.type });
    const dataUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(filee);
    });

    resizedImage.value = filee;
    resizedImageUrl.value = dataUrl as string;
    useIsLoading().value = false;
  };
  if (!picture.value) {
    return;
  }
  reader.readAsArrayBuffer(picture.value);
};

const onFileChange = (event: Event) => {
  const inputEvent = event as InputEvent;
  // @ts-expect-error TS is Dumb
  const file = inputEvent.target.files[0] as File;

  if (!file) {
    return;
  }
  picture.value = file;

  const reader = new FileReader();
  reader.onload = () => {
    previewUrl.value = reader.result as string;
  };

  reader.readAsDataURL(file);
};
</script>
<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="text-center py-16">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        WASM Image Processor Demo
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Welcome! Explore high-performance client-side image processing demos powered
        by Rust, WebAssembly, and Vue.js. Select a function from the sidebar to get
        started.
      </p>
    </div>
  </div>
</template>
