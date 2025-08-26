# Examples

Practical examples of using the WASM Image Processor in real-world scenarios.

## PWA Icon Generator

Create multiple icon sizes for Progressive Web Apps from a single source image:

```javascript
import { resize_square } from "wasm-image-processor"

async function generatePWAIcons(sourceFile) {
  const sizes = [72, 96, 128, 144, 152, 192, 384, 512]
  const arrayBuffer = await sourceFile.arrayBuffer()
  const sourceBytes = new Uint8Array(arrayBuffer)
  
  const icons = []
  
  for (const size of sizes) {
    try {
      const resizedBytes = resize_square(sourceBytes, size)
      const blob = new Blob([resizedBytes], { type: 'image/png' })
      
      icons.push({
        size: `${size}x${size}`,
        blob: blob,
        filename: `icon-${size}x${size}.png`
      })
    } catch (error) {
      console.error(`Failed to generate ${size}x${size} icon:`, error)
    }
  }
  
  return icons
}

// Usage
const fileInput = document.querySelector('#iconSource')
fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0]
  if (!file) return
  
  const icons = await generatePWAIcons(file)
  
  // Download all icons
  icons.forEach(icon => {
    const url = URL.createObjectURL(icon.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = icon.filename
    a.click()
    URL.revokeObjectURL(url)
  })
})
```

## Coming Soon

We're working on adding more comprehensive examples including:

- **Batch processing** multiple files with different operations
- **Integration** with React/Vue/Angular frameworks
- **Error handling** patterns and best practices
- **Image format** detection and conversion workflows
- **Progressive loading** strategies for large images
- **Filter chains** combining multiple effects
- **Metadata handling** for privacy-sensitive applications
- **Performance optimization** techniques

Check back soon for detailed examples!
