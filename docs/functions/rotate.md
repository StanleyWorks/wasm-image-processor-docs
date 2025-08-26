# rotate

Rotate an image by a specified number of degrees.

::: warning Under Development
This function is currently under development. Check back soon for updates!
:::

## Planned Signature

```ts
rotate(input: Uint8Array, degrees: number) => Uint8Array
```

## Planned Parameters

- **`input`** — Encoded image bytes (PNG or JPEG)
- **`degrees`** — Rotation angle in degrees (positive for clockwise)

## Planned Returns

- `Uint8Array` — Encoded PNG bytes of the rotated image

## Planned Features

- Support for arbitrary rotation angles
- High-quality interpolation
- Automatic canvas resizing to fit rotated image
- Background fill options
