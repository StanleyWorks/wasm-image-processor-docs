<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { crop } from "wasm-image-processor";

const parameters = [
  {
    key: "x",
    label: "Left position (px)",
    value: 0,
    min: 0,
    max: 8192,
    step: 1,
  },
  {
    key: "y",
    label: "Top position (px)",
    value: 0,
    min: 0,
    max: 8192,
    step: 1,
  },
  {
    key: "width",
    label: "Width (px)",
    value: 300,
    min: 1,
    max: 8192,
    step: 1,
  },
  {
    key: "height",
    label: "Height (px)",
    value: 300,
    min: 1,
    max: 8192,
    step: 1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  crop(bytes, values.x!, values.y!, values.width!, values.height!);
</script>

<template>
  <ImageWorkbench
    title="Crop"
    description="Keep a rectangular area of your image. Positions start at the top-left corner."
    operation="crop"
    :parameters="parameters"
    :transform="transform"
  />
</template>
