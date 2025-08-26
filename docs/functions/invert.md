# invert

Invert the colors of an image for artistic or utility purposes.

::: success
**Ready & Demoed**
:::

## Signature

```ts
invert(input: Uint8Array) => Uint8Array
```

## Parameters
- **`input`** — Encoded image bytes (PNG or JPEG)

## Returns
- `Uint8Array` — Encoded PNG bytes of the inverted image

## Features
- Simple color inversion
- Useful for dark mode, artistic effects, or analysis

## Example
```ts
import { invert } from "wasm-image-processor"
const inverted = invert(uint8Array)
```

## Use Cases
- Dark mode previews
- Artistic filters
- Image analysis
