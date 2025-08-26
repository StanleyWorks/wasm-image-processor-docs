# Changelog

Track the development progress and feature releases of the WASM Image Processor.

## Version 0.4.0 (Current)

### Available Functions
- ✅ `resize_square` - Resize images to square dimensions

### Under Development
- 🚧 **Core Operations**: `resize`, `crop`, `thumbnail`, `rotate90/180/270`, `flip_horizontal/vertical`
- 🚧 **Color & Filters**: `grayscale`, `invert`, `brighten`, `contrast`, `hue_rotate`, `blur`, `sharpen`
- 🚧 **Format Conversion**: `to_jpeg`, `to_webp`, `optimize_png`
- 🚧 **Advanced**: `resize_to_fill`, `resize_to_fit`, `paste`
- 🚧 **Utilities**: `get_dimensions`, `get_format`, `strip_metadata`
- 🚧 **Batch Processing**: `batch_resize`, `create_sprite_sheet`

## Future Releases

The roadmap includes comprehensive image processing capabilities powered by the Rust `image` crate:

### Planned Categories
- **Core Operations**: Basic resizing, cropping, and transformations
- **Color Manipulation**: Brightness, contrast, hue, and color space conversions  
- **Filters & Effects**: Blur, sharpen, and artistic filters
- **Format Support**: JPEG, WebP, and optimized PNG output
- **Batch Processing**: Handle multiple images efficiently
- **Utility Functions**: Metadata handling and image analysis

All functions will maintain the same zero-dependency, privacy-first approach with near-native performance.
