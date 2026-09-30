<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { thumbnail } from "wasm-image-processor";

const parameters = [
  {
    key: "width",
    label: "Width (px)",
    value: 240,
    min: 1,
    max: 8192,
    step: 1,
  },
  {
    key: "height",
    label: "Height (px)",
    value: 240,
    min: 1,
    max: 8192,
    step: 1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  thumbnail(bytes, values.width!, values.height!);
</script>

<template>
  <ImageWorkbench
    title="Thumbnail"
    description="Make a smaller preview that fits within your chosen dimensions."
    operation="thumbnail"
    :parameters="parameters"
    :transform="transform"
  />
</template>
