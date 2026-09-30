<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { resize_square } from "wasm-image-processor";

const parameters = [
  {
    key: "side",
    label: "Side length (px)",
    value: 512,
    min: 1,
    max: 8192,
    step: 1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  resize_square(bytes, values.side!);
</script>

<template>
  <ImageWorkbench
    title="Resize square"
    description="Create a square image. Width and height are stretched to the same size."
    operation="resize_square"
    :parameters="parameters"
    :transform="transform"
  />
</template>
