<script setup lang="ts">
import { ref } from "vue";

const currentYear = new Date().getFullYear();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="min-h-screen flex bg-gray-50">
    <!-- Sidebar -->
    <aside
      class="w-64 bg-white text-gray-800 border-r border-gray-200 flex-shrink-0 min-h-screen hidden md:block"
    >
      <div class="p-6">
        <h2 class="text-xl font-bold mb-6">Demos</h2>
        <nav>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/demos/blur"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Blur</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/contrast"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Contrast</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/hue-rotate"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Hue Rotate</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/invert"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Invert</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/resize_square"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Resize Square</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/thumbnail"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Thumbnail</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/fast_blur"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Fast Blur</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/brighten"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Brighten</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/grayscale"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Grayscale</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/crop"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Crop</router-link
              >
            </li>
            <li>
              <router-link
                to="/demos/resize"
                class="block px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                >Resize</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-screen">
      <!-- Navbar -->
      <nav class="bg-white text-gray-800 shadow-lg border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-space-between h-16">
            <div class="flex justify-between">
              <div class="flex-shrink-0 flex items-center">
                <router-link to="/" class="flex items-center">
                  <svg
                    class="h-8 w-8 mr-2"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path
                      d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
                    />
                  </svg>
                  <span class="text-xl font-bold tracking-tight"
                    >WASM Image Processor</span
                  >
                </router-link>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Navigation links removed for cleaner navbar -->
                </div>
              </div>
            </div>
            <div class="md:hidden">
              <button
                @click="toggleMenu"
                class="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    v-if="!isMenuOpen"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    v-else
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
          class="md:hidden"
        >
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Home link removed from mobile nav -->
            <a
              href="https://github.com/StanleyMasinde/wasm-image-processor"
              target="_blank"
              class="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition"
            >
              <svg class="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://webassembly.org/"
              target="_blank"
              class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition"
              >About WebAssembly</a
            >
          </div>
        </div>
      </nav>

      <main class="flex-grow container mx-auto px-4 py-8">
        <div class="bg-white shadow-sm rounded-lg p-6 mb-8">
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              WASM Image Processor Demo
            </h2>
            <p class="text-gray-600 max-w-2xl mx-auto">
              This app demonstrates multiple image processing functions powered
              by WebAssembly (WASM) and Rust. Select a function from the sidebar
              to try out blur, contrast, hue rotate, invert, resize, crop,
              grayscale, brighten, and more—all processed entirely in your
              browser.
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

        <RouterView />

        <div class="mt-10 text-center">
          <a
            href="https://github.com/StanleyMasinde/wasm-image-processor"
            class="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
            target="_blank"
          >
            <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            View Documentation on GitHub
          </a>
        </div>
      </main>
      <!-- Footer -->
      <footer class="bg-white text-gray-600 border-t border-gray-200 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-bold mb-4 flex items-center">
                <svg
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path
                    d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
                  />
                </svg>
                About This Demo
              </h3>
              <p class="text-gray-500">
                This demonstration showcases the WebAssembly-powered image
                resizing capabilities from the WASM Image Processor library.
                It's a simple example of how WebAssembly can be used for
                efficient client-side image operations.
              </p>
              <div class="mt-4">
                <a
                  href="https://github.com/StanleyMasinde/wasm-image-processor"
                  target="_blank"
                  class="inline-flex items-center px-4 py-2 bg-primary text-white hover:bg-secondary transition-colors rounded-md"
                >
                  <svg
                    class="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  Visit GitHub Repository
                </a>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Tech Stack</h3>
              <ul class="space-y-3">
                <li class="text-gray-500 flex items-center">
                  <span>Rust + WebAssembly</span>
                </li>
                <li class="text-gray-500 flex items-center">
                  <span>Vue.js</span>
                </li>
                <li class="text-gray-500 flex items-center">
                  <span>JavaScript</span>
                </li>
                <li class="text-gray-500 flex items-center">
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center"
          >
            <p class="text-sm text-gray-400">
              &copy; {{ currentYear }} WASM Image Processor Demo. MIT License.
            </p>
            <div class="mt-4 sm:mt-0 flex space-x-6">
              <a
                href="https://github.com/StanleyMasinde/wasm-image-processor/blob/main/LICENSE"
                target="_blank"
                class="text-sm text-gray-400 hover:text-primary transition"
                >License</a
              >
              <a
                href="https://github.com/StanleyMasinde/wasm-image-processor#contributing"
                target="_blank"
                class="text-sm text-gray-400 hover:text-primary transition"
                >Contribute</a
              >
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
