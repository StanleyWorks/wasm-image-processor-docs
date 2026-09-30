<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { hue_rotate } from "wasm-image-processor";

const parameters = [
  {
    key: "degrees",
    label: "Rotation (degrees)",
    value: 180,
    min: 0,
    max: 360,
    step: 1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  hue_rotate(bytes, values.degrees!);
</script>

<template>
  <ImageWorkbench
    title="Hue rotate"
    description="Shift the colors around the color wheel. A full 360° turn returns to the original."
    operation="hue_rotate"
    :parameters="parameters"
    :transform="transform"
  />
</template>
