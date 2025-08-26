# blur

Apply Gaussian blur effects to an image for artistic or privacy purposes.

::: success
**Ready & Demoed**
:::

## Planned Signature

```ts
blur(input: Uint8Array, radius: number) => Uint8Array
```

## Planned Parameters

- **`input`** — Encoded image bytes (PNG or JPEG)
- **`radius`** — Blur radius in pixels (0.1 - 10.0)

## Planned Returns

- `Uint8Array` — Encoded PNG bytes of the blurred image

## Planned Features

- **Gaussian blur algorithm** for smooth, natural-looking blur
- **Configurable intensity** from subtle to heavy blur effects
- **Edge handling** to prevent artifacts at image borders
- **Performance optimizations** for large images using Rust's image crate
- **Privacy mode** for quickly obscuring sensitive content

## Use Cases

- **Privacy protection**: Blur faces or sensitive information
- **Background effects**: Create depth of field effects
- **Artistic filters**: Add dreamy or soft focus effects
- **Image preprocessing**: Reduce noise before other operations
