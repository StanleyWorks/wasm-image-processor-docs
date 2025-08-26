# fast_blur

Apply a fast blur effect to an image for quick privacy or artistic purposes.

::: success
**Ready & Demoed**
:::

## Signature

```ts
fast_blur(input: Uint8Array, sigma: number) => Uint8Array
```

## Parameters
- **`input`** — Encoded image bytes (PNG or JPEG)
- **`sigma`** — Blur strength (e.g. 1-10)

## Returns
- `Uint8Array` — Encoded PNG bytes of the blurred image

## Features
- Fast, approximate blur for instant results
- Useful for privacy, previews, or background effects

## Example
```ts
import { fast_blur } from "wasm-image-processor"
const blurred = fast_blur(uint8Array, 2)
```

## Use Cases
- Privacy protection: blur faces or sensitive regions
- Artistic effects: soft backgrounds
- Quick previews: obscure details
