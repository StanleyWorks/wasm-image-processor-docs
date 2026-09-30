<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { resize } from "wasm-image-processor";

const parameters = [
  {
    key: "width",
    label: "Width (px)",
    value: 800,
    min: 1,
    max: 8192,
    step: 1,
  },
  {
    key: "height",
    label: "Height (px)",
    value: 600,
    min: 1,
    max: 8192,
    step: 1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  resize(bytes, values.width!, values.height!);
</script>

<template>
  <ImageWorkbench
    title="Resize"
    description="Fit an image within a width and height while keeping its proportions."
    operation="resize"
    :parameters="parameters"
    :transform="transform"
  />
</template>
