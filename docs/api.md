# API Reference

The **WASM Image Processor** exposes a set of functions compiled to WebAssembly.
All functions operate on raw image data and return processed image bytes.

## Installation

```bash
npm install wasm-image-processor
# or
pnpm add wasm-image-processor
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
```

## Available Functions

---

## Functions

### Ready & Demoed Functions

- `blur(input: Uint8Array, radius: number): Uint8Array` — Gaussian blur
- `fast_blur(input: Uint8Array, sigma: number): Uint8Array` — Fast blur
- `contrast(input: Uint8Array, value: number): Uint8Array` — Adjust contrast
- `brighten(input: Uint8Array, value: number): Uint8Array` — Adjust brightness
- `grayscale(input: Uint8Array): Uint8Array` — Convert to grayscale
- `invert(input: Uint8Array): Uint8Array` — Invert colors
- `hue_rotate(input: Uint8Array, degrees: number): Uint8Array` — Rotate hue
- `crop(input: Uint8Array, x: number, y: number, width: number, height: number): Uint8Array` — Crop to region
- `resize(input: Uint8Array, width: number, height: number): Uint8Array` — Resize to custom dimensions
- `resize_square(input: Uint8Array, size: number): Uint8Array` — Resize to square
- `thumbnail(input: Uint8Array, size: number): Uint8Array` — Generate thumbnail

See the sidebar for details, usage, and live demos of each function.

## Planned Functions 🚧

The following functions are planned for future releases, based on the Rust `image` crate capabilities:

### Core Resizing & Transformation
- **`resize(width, height)`** - Resize with custom dimensions
- **`resize_with_filter(width, height, filter)`** - Resize with different filter algorithms (Lanczos3, CatmullRom, etc.)
- **`thumbnail(max_width, max_height)`** - Create thumbnails with aspect ratio preservation
- **`crop(x, y, width, height)`** - Extract specific regions from images
- **`rotate90()`, `rotate180()`, `rotate270()`** - Fast 90-degree rotations
- **`flip_horizontal()`, `flip_vertical()`** - Mirror operations

### Color & Filter Operations
- **`grayscale()`** - Convert to grayscale
- **`invert()`** - Invert colors
- **`brighten(value)`** - Adjust brightness (-100 to 100)
- **`contrast(value)`** - Adjust contrast
- **`hue_rotate(degrees)`** - Shift hue values
- **`blur(radius)`** - Gaussian blur with configurable radius
- **`sharpen()`** - Image sharpening

### Format Conversion
- **`to_jpeg(quality)`** - Convert to JPEG with quality settings (1-100)
- **`to_webp(quality)`** - Convert to WebP format
- **`optimize_png()`** - PNG compression optimization

### Advanced Operations
- **`resize_to_fill(width, height)`** - Resize and crop to exact dimensions
- **`resize_to_fit(width, height)`** - Resize maintaining aspect ratio within bounds
- **`paste(overlay, x, y)`** - Composite images together

### Utility Functions
- **`get_dimensions()`** - Get image width/height without full decode
- **`get_format()`** - Detect image format (png, jpeg, webp)
- **`strip_metadata()`** - Remove EXIF/metadata for privacy

### Batch Operations
- **`batch_resize(sizes)`** - Process multiple sizes in one call
- **`create_sprite_sheet(images)`** - Combine multiple images into one

See individual function pages for detailed specifications.`

---

## Roadmap

More functions will be added in future releases. Track progress in the [changelog](/changelog).

## Error Handling

All functions will throw an exception if the input is not a valid image.
Always wrap calls in `try/catch` when working with untrusted files.

### Basic Error Handling

```ts
try {
  const resized = resize_square(uint8Array, 256)
  // Success - process the result
} catch (err) {
  console.error("Failed to process image:", err.message)
  // Handle the error appropriately
}
```

### Common Error Scenarios

```ts
async function processUserImage(file) {
  try {
    // Validate file size (optional)
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      throw new Error("File too large. Maximum size is 10MB.")
    }
    
    const arrayBuffer = await file.arrayBuffer()
    const uint8Array = new Uint8Array(arrayBuffer)
    
    const resized = resize_square(uint8Array, 512)
    
    return new Blob([resized], { type: "image/png" })
  } catch (err) {
    // Handle different types of errors
    if (err.message.includes("Failed to read image")) {
      throw new Error("Invalid image file. Please upload a PNG or JPEG.")
    } else if (err.message.includes("size")) {
      throw new Error("Invalid size parameter.")
    } else {
      throw new Error("Failed to process image: " + err.message)
    }
  }
}
```

---

## Browser Compatibility

- **Chrome/Edge**: 57+ ✅
- **Firefox**: 52+ ✅ 
- **Safari**: 11+ ✅
- **Mobile browsers**: iOS Safari 11+, Chrome Mobile 57+ ✅

All modern browsers with WebAssembly support are compatible.

## Performance Tips

- **Memory usage**: Large images (>5000px) may use significant memory
- **File size limits**: Recommended maximum input size is 10MB
- **Batch processing**: Process images sequentially to avoid memory issues
- **Error handling**: Always validate inputs to prevent crashes

---

## Notes

* Functions return **encoded image bytes** in PNG format by default.
* Format conversion functions (like `to_jpeg`, `to_webp`) will return bytes in their respective formats.
* Convert the returned `Uint8Array` to a `Blob` or `ImageBitmap` for rendering.
* Performance is close to native; avoid processing huge files on memory-constrained devices.


```

