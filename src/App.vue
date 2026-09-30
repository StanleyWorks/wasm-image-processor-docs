<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { operations } from "@/data/operations";

const route = useRoute();
const isMenuOpen = ref(false);
const menuButton = ref<HTMLButtonElement>();
const groups = ["Size & shape", "Color & detail"];
watch(
  () => route.path,
  async () => {
    isMenuOpen.value = false;
    const operation = operations.find((item) => item.path === route.path);
    document.title = `${operation?.title ?? "Image playground"} · WASM Image Processor`;
    await nextTick();
    document
      .querySelector<HTMLElement>("main h1")
      ?.focus({ preventScroll: true });
  },
);
function escapeMenu() {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    menuButton.value?.focus();
  }
}
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="app-shell" @keydown.esc="escapeMenu">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="WASM Image Processor home">
        <svg
          class="brand-mark"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="26"
            height="26"
            rx="5"
            stroke="currentColor"
            stroke-width="2"
          />
          <circle cx="11" cy="11" r="3" fill="currentColor" />
          <path
            d="m5 25 8-9 5 5 5-7 5 7"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
        <span>WASM<span class="brand-detail"> Image Processor</span></span>
      </RouterLink>
      <div class="header-actions">
        <span class="local-status"
          ><span aria-hidden="true"></span>Runs in your browser</span
        >
        <a
          class="header-link"
          href="https://github.com/StanleyMasinde/wasm-image-processor"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub <span aria-hidden="true">↗</span></a
        >
        <button
          ref="menuButton"
          class="button secondary menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="operation-nav"
          @click="isMenuOpen = !isMenuOpen"
        >
          {{ isMenuOpen ? "Close" : "Tools" }}
        </button>
      </div>
    </header>
    <div class="app-body">
      <aside
        id="operation-nav"
        class="sidebar"
        :class="{ 'is-open': isMenuOpen }"
      >
        <nav aria-label="Image operations">
          <RouterLink
            class="nav-link overview-link"
            to="/"
            exact-active-class="is-current"
            ><span>Overview</span><span aria-hidden="true">↗</span></RouterLink
          >
          <div v-for="group in groups" :key="group" class="nav-group">
            <h2>{{ group }}</h2>
            <RouterLink
              v-for="item in operations.filter((item) => item.group === group)"
              :key="item.key"
              class="nav-link"
              active-class="is-current"
              :to="item.path"
              ><span>{{ item.title }}</span
              ><span class="nav-arrow" aria-hidden="true">↗</span></RouterLink
            >
          </div>
        </nav>
        <div class="sidebar-note">
          <p>Local by design.</p>
          <span
            >Images are processed on your device. No upload to a server.</span
          >
        </div>
      </aside>
      <div class="content-column">
        <main id="main-content" tabindex="-1"><RouterView /></main>
        <footer class="site-footer">
          <span>WASM Image Processor</span>
          <div>
            <a
              href="https://github.com/StanleyMasinde/wasm-image-processor#readme"
              target="_blank"
              rel="noopener noreferrer"
              >Documentation ↗</a
            ><a
              href="https://github.com/StanleyMasinde/wasm-image-processor/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              >MIT license</a
            ><a
              href="https://webassembly.org/"
              target="_blank"
              rel="noopener noreferrer"
              >WebAssembly ↗</a
            >
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
