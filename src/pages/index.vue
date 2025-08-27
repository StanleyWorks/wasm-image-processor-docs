<script setup lang="ts"></script>
<template>
  <div class="bg-white shadow-sm rounded-lg p-6 mb-8">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">
        WASM Image Processor Demo
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        This app demonstrates multiple image processing functions powered by
        WebAssembly (WASM) and Rust. Select a function from the sidebar to try
        out blur, contrast, hue rotate, invert, resize, crop, grayscale,
        brighten, and more—all processed entirely in your browser.
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 text-center md:text-left"
    >
      <div class="flex items-center">
        <div
          class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span class="text-gray-700">Client-side processing</span>
      </div>

      <div class="flex items-center">
        <div
          class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span class="text-gray-700">No server uploads</span>
      </div>

      <div class="flex items-center">
        <div
          class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span class="text-gray-700">Near-native performance</span>
      </div>
    </div>
  </div>
</template>
