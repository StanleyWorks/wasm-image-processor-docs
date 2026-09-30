import { defineConfig } from "vitepress";

export default defineConfig({
  title: "WASM Image Processor",
  description:
    "Fast, offline image processing in the browser with WebAssembly.",
  vite: { publicDir: "../public" },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      { text: "API", link: "/api" },
      { text: "Examples", link: "/examples" },
      { text: "Changelog", link: "/changelog" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "API Overview", link: "/api" },
          { text: "Examples", link: "/examples" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
      {
        text: "Core Functions",
        items: [
          { text: "resize_square", link: "/functions/resize_square" },
          { text: "resize", link: "/functions/resize" },
          { text: "crop", link: "/functions/crop" },
          { text: "thumbnail", link: "/functions/thumbnail" },
        ],
      },
      {
        text: "Color & Filters",
        items: [
          { text: "blur", link: "/functions/blur" },
          { text: "fast_blur", link: "/functions/fast_blur" },
          { text: "contrast", link: "/functions/contrast" },
          { text: "brighten", link: "/functions/brighten" },
          { text: "grayscale", link: "/functions/grayscale" },
          { text: "invert", link: "/functions/invert" },
          { text: "hue_rotate", link: "/functions/hue_rotate" },
        ],
      },
      {
        text: "Transformations",
        items: [
          { text: "rotate (planned)", link: "/functions/rotate" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/StanleyMasinde/wasm-image-processor",
      },
    ],

    editLink: {
      pattern: 'https://github.com/StanleyWorks/wasm-image-processor-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
});
