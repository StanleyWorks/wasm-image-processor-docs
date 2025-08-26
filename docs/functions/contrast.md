# contrast

Adjust the contrast of an image for better clarity or artistic effect.

::: success
**Ready & Demoed**
:::

## Signature

```ts
contrast(input: Uint8Array, value: number) => Uint8Array
```

## Parameters
- **`input`** — Encoded image bytes (PNG or JPEG)
- **`value`** — Contrast adjustment (-100 to 100)

## Returns
- `Uint8Array` — Encoded PNG bytes of the contrast-adjusted image

## Features
- Increase or decrease image contrast
- Useful for correcting flat or harsh images

## Example
```ts
import { contrast } from "wasm-image-processor"
const contrasted = contrast(uint8Array, 30)
```

## Use Cases
- Fix low-contrast images
- Artistic effects
- Preprocessing for further editing
