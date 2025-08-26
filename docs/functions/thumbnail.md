# thumbnail

Generate a small thumbnail from an image for previews or galleries.

::: success
**Ready & Demoed**
:::

## Signature

```ts
thumbnail(input: Uint8Array, size: number) => Uint8Array
```

## Parameters
- **`input`** — Encoded image bytes (PNG or JPEG)
- **`size`** — Target thumbnail size (pixels)

## Returns
- `Uint8Array` — Encoded PNG bytes of the thumbnail image

## Features
- Fast thumbnail generation
- Maintains aspect ratio
- Useful for galleries, previews, or file pickers

## Example
```ts
import { thumbnail } from "wasm-image-processor"
const thumb = thumbnail(uint8Array, 128)
```

## Use Cases
- Image galleries
- File previews
- Quick loading for large image sets
