<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { blur } from "wasm-image-processor";

const parameters = [
  {
    key: "sigma",
    label: "Sigma",
    value: 2,
    min: 0.1,
    max: 20,
    step: 0.1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  blur(bytes, values.sigma!);
</script>

<template>
  <ImageWorkbench
    title="Blur"
    description="Soften detail with a Gaussian blur. A higher sigma creates a stronger effect."
    operation="blur"
    :parameters="parameters"
    :transform="transform"
  />
</template>
