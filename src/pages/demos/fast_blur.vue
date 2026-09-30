<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { fast_blur } from "wasm-image-processor";

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
  fast_blur(bytes, values.sigma!);
</script>

<template>
  <ImageWorkbench
    title="Fast blur"
    description="Soften your image with an approximate Gaussian blur."
    operation="fast_blur"
    :parameters="parameters"
    :transform="transform"
  />
</template>
