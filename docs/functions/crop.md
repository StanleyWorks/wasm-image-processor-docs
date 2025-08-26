# crop

Crop an image to a specific region.

::: success
**Ready & Demoed**
:::

## Planned Signature

```ts
crop(input: Uint8Array, x: number, y: number, width: number, height: number) => Uint8Array
```

## Planned Parameters

- **`input`** — Encoded image bytes (PNG or JPEG)
- **`x`** — X coordinate of the crop region
- **`y`** — Y coordinate of the crop region
- **`width`** — Width of the crop region
- **`height`** — Height of the crop region

## Planned Returns

- `Uint8Array` — Encoded PNG bytes of the cropped image

## Planned Features

- Precise pixel-level cropping
- Automatic bounds checking
- Support for different image formats
