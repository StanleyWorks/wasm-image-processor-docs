<script setup lang="ts">
const sampleUrl = `${import.meta.env.BASE_URL}sample.svg`;
</script>

<template>
  <div class="overview">
    <section class="intro-grid">
      <div class="intro-copy">
        <h1 tabindex="-1">Your images.<br /><span>Your browser.</span></h1>
        <p>
          Resize, crop, and explore color with WebAssembly. Start with an image.
          Make a change. Keep the result.
        </p>
        <RouterLink class="button primary" to="/demos/resize"
          >Try resize <span aria-hidden="true">↗</span></RouterLink
        >
        <p class="intro-note">
          No account. No server uploads. Just your image.
        </p>
      </div>
      <figure class="sample-figure">
        <img
          :src="sampleUrl"
          width="960"
          height="720"
          alt="Sample image with a green arch, an orange sun, and blue steps"
          fetchpriority="high"
        />
        <figcaption>
          <span>A sample to experiment with</span
          ><RouterLink to="/demos/grayscale">Try grayscale ↗</RouterLink>
        </figcaption>
      </figure>
    </section>
    <section class="tool-directory" aria-labelledby="tools-title">
      <div class="directory-heading">
        <h2 id="tools-title">What would you like to change?</h2>
        <p>Pick an operation to open the workbench.</p>
      </div>
      <div class="tool-row">
        <div>
          <h3>Size & shape</h3>
          <p>Fit a frame, make a thumbnail, or keep only the part you need.</p>
        </div>
        <div class="tool-links">
          <RouterLink to="/demos/resize">Resize ↗</RouterLink
          ><RouterLink to="/demos/crop">Crop ↗</RouterLink
          ><RouterLink to="/demos/thumbnail">Thumbnail ↗</RouterLink
          ><RouterLink to="/demos/resize_square">Resize square ↗</RouterLink>
        </div>
      </div>
      <div class="tool-row">
        <div>
          <h3>Color & detail</h3>
          <p>
            Soften edges, shift colors, or see your image in a different light.
          </p>
        </div>
        <div class="tool-links">
          <RouterLink to="/demos/blur">Blur ↗</RouterLink
          ><RouterLink to="/demos/fast_blur">Fast blur ↗</RouterLink
          ><RouterLink to="/demos/brighten">Brighten ↗</RouterLink
          ><RouterLink to="/demos/contrast">Contrast ↗</RouterLink
          ><RouterLink to="/demos/hue-rotate">Hue rotate ↗</RouterLink
          ><RouterLink to="/demos/grayscale">Grayscale ↗</RouterLink
          ><RouterLink to="/demos/invert">Invert ↗</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
