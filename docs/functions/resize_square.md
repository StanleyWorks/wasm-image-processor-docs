# resize_square

Resize an image into a square of the given size (width and height in pixels).

::: success
**Ready & Demoed**
:::

---

## Signature

```ts
resize_square(input: Uint8Array, size: number) => Uint8Array
````

---

## Parameters

* **`input`** — Encoded image bytes (PNG or JPEG).
* **`size`** — Desired square dimension in pixels (e.g. `256`).

---

## Returns

* **`Uint8Array`** — Encoded PNG bytes of the resized image.

---

## Example

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
      a.download = "resized-256x256.png"
      a.click()
      URL.revokeObjectURL(url)
    }
  })
</script>
```

---

## Notes

* Input must be a valid image (PNG or JPEG).
* Throws an error if decoding fails — wrap in `try/catch` when handling untrusted files.
* Output is always **PNG** regardless of input type.

---

## Status

✅ Implemented and available now.
