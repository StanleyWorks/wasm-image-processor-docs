<script setup lang="ts">
import { ref } from "vue";
import { grayscale } from "wasm-image-processor";
import { useFileSize } from "@/composables/useFileSize";
import { useIsLoading } from "@/composables/useIsLoading";
import { useCreateObjectUrl } from "@/composables/useCreateObjectUrl";

const previewUrl = ref<string | undefined>(undefined);
const picture = ref<File | undefined>(undefined);
const processedImage = ref<File | undefined>(undefined);
const processedImageUrl = ref<string | undefined>(undefined);

const onSubmit = () => {
  useIsLoading().value = true;
  const reader = new FileReader();
  reader.onload = async () => {
    const arrayBuffer = reader.result as ArrayBuffer;
    if (!arrayBuffer || !picture.value) {
      return;
    }
    const uint8Array = new Uint8Array(arrayBuffer);
    const result = grayscale(uint8Array);
    const file = new File([result], "grayscale", { type: picture.value.type });
    const dataUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
    processedImage.value = file;
    processedImageUrl.value = dataUrl as string;
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
    <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Grayscale Demo</h1>
    <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
      <form action="#" @submit.prevent="onSubmit">
        <div class="mb-5">
          <label for="file" class="block text-gray-700 font-medium mb-2">Choose an image</label>
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer">
            <input id="file" @change="onFileChange" class="hidden" type="file" accept="image/png, image/jpeg" />
            <label for="file" class="flex flex-col items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span class="text-gray-600">{{ previewUrl ? "Change image" : "Click to upload" }}</span>
              <span class="text-xs text-gray-500 mt-1">PNG or JPG format only</span>
            </label>
          </div>
        </div>
        <button type="submit" class="w-full bg-primary hover:bg-primary text-white py-3 px-4 rounded-lg font-medium transition disabled:bg-gray-300 disabled:cursor-not-allowed flex justify-center items-center" :disabled="useIsLoading().value || !picture">
          <svg v-if="useIsLoading().value" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          {{ useIsLoading().value ? "Processing..." : "Apply Grayscale" }}
        </button>
      </form>
    </div>
    <div v-if="previewUrl || processedImageUrl" class="mb-6">
      <h2 class="text-2xl font-semibold text-center mb-4 text-gray-700">
        {{ useIsLoading().value ? "Processing image..." : "Image Preview" }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-if="previewUrl" class="flex flex-col items-center">
          <div class="text-lg font-medium text-gray-700 mb-2">Original</div>
          <div class="relative border rounded-lg overflow-hidden shadow-md bg-gray-100 p-2">
            <img class="max-h-64 max-w-full object-contain mx-auto" :src="previewUrl" alt="Original image" />
          </div>
          <div v-if="picture" class="mt-2 text-sm text-gray-500">Size: {{ useFileSize(picture) }}</div>
        </div>
        <div v-if="processedImageUrl" class="flex flex-col items-center">
          <div class="text-lg font-medium text-gray-700 mb-2">Grayscale</div>
          <div class="relative border-2 border-green-500 rounded-lg overflow-hidden shadow-md bg-gray-100 p-2">
            <img class="max-h-64 max-w-full object-contain mx-auto" :src="processedImageUrl" alt="Grayscale image" />
          </div>
          <div v-if="processedImage" class="mt-2 text-sm text-gray-500">Size: {{ useFileSize(processedImage) }}</div>
          <div>
            <a v-if="processedImage" download :href="useCreateObjectUrl(processedImage)">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
