# brighten

Increase or decrease the brightness of an image.

::: success
**Ready & Demoed**
:::

## Signature

```ts
brighten(input: Uint8Array, value: number) => Uint8Array
```

## Parameters
- **`input`** — Encoded image bytes (PNG or JPEG)
- **`value`** — Brightness adjustment (-100 to 100)

## Returns
- `Uint8Array` — Encoded PNG bytes of the brightened image

## Features
- Adjust image brightness up or down
- Useful for correcting under/overexposed photos

## Example
```ts
import { brighten } from "wasm-image-processor"
const brightened = brighten(uint8Array, 20)
```

## Use Cases
- Fix dark or washed-out images
- Artistic effects
- Preprocessing for further editing
