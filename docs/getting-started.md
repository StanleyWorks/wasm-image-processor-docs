# Getting Started

The **WASM Image Processor** lets you resize and transform images directly in the browser using WebAssembly. This page shows how to install the package and process images for download.

## Installation

```bash
pnpm add wasm-image-processor
# or
npm install wasm-image-processor
# or
yarn add wasm-image-processor
```

### Vite Configuration

If you're using Vite, you'll need to install and configure the WASM plugin:

```bash
npm install vite-plugin-wasm
```

Add to your `vite.config.js`:

```js
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  plugins: [wasm()],
})
````

## Basic Example

```html
<input type="file" id="fileInput" />
<button id="downloadBtn" style="display: none;">Download Resized Image</button>

<script type="module">
  import { resize_square } from "wasm-image-processor"

  const input = document.getElementById("fileInput")
  const downloadBtn = document.getElementById("downloadBtn")

  input.addEventListener("change", async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const arrayBuffer = await file.arrayBuffer()
    const uint8Array = new Uint8Array(arrayBuffer)

    // Resize to a 256x256 square
    const resized = resize_square(uint8Array, 256)

    // Create a downloadable blob
    const blob = new Blob([resized], { type: "image/png" })
    const url = URL.createObjectURL(blob)

    // Show download button and set up download
    downloadBtn.style.display = "block"
    downloadBtn.onclick = () => {
      const a = document.createElement("a")
      a.href = url
      a.download = "resized-image.png"
      a.click()
      URL.revokeObjectURL(url)
    }
  })
</script>
```

## Next Steps

* [API Reference](/api) — Explore all functions
* [Examples](/examples) — See real-world usage patterns

## Troubleshooting

### Common Issues

**Import Error**: Make sure you're using a modern bundler that supports WebAssembly (Vite with `vite-plugin-wasm`, Webpack 5+, or Rollup).

**Vite WASM Issues**: If you're using Vite and getting WASM-related errors, ensure you have `vite-plugin-wasm` installed and configured properly.

**"Failed to read image" Error**: The uploaded file is not a valid image format. Only PNG and JPEG are currently supported.

**Memory Issues**: Large images may cause memory problems on mobile devices. Consider resizing to smaller dimensions or adding file size limits.

**CORS Issues**: When loading images from URLs, ensure proper CORS headers are set on the image server.

### Browser Support

This library requires WebAssembly support. All modern browsers (Chrome 57+, Firefox 52+, Safari 11+) are supported.


