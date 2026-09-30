<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { brighten } from "wasm-image-processor";

const parameters = [
  {
    key: "value",
    label: "Brightness",
    value: 20,
    min: -100,
    max: 100,
    step: 1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  brighten(bytes, values.value!);
</script>

<template>
  <ImageWorkbench
    title="Brighten"
    description="Lighten or darken your image. Use a negative value to reduce brightness."
    operation="brighten"
    :parameters="parameters"
    :transform="transform"
  />
</template>
