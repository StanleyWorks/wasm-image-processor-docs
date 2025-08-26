# hue_rotate

Rotate the hue of an image for color shifting and creative effects.

::: success
**Ready & Demoed**
:::

## Signature

```ts
hue_rotate(input: Uint8Array, degrees: number) => Uint8Array
```

## Parameters
- **`input`** — Encoded image bytes (PNG or JPEG)
- **`degrees`** — Degrees to rotate hue (0-360)

## Returns
- `Uint8Array` — Encoded PNG bytes of the hue-rotated image

## Features
- Shift image colors for creative effects
- Useful for color correction or artistic filters

## Example
```ts
import { hue_rotate } from "wasm-image-processor"
const shifted = hue_rotate(uint8Array, 120)
```

## Use Cases
- Artistic color shifts
- Color correction
- Fun filters
