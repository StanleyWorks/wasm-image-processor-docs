<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { contrast } from "wasm-image-processor";

const parameters = [
  {
    key: "value",
    label: "Contrast",
    value: 50,
    min: -100,
    max: 100,
    step: 1,
  },
];
const transform = (bytes: Uint8Array, values: Record<string, number>) =>
  contrast(bytes, values.value!);
</script>

<template>
  <ImageWorkbench
    title="Contrast"
    description="Adjust the difference between light and dark. Negative values soften contrast."
    operation="contrast"
    :parameters="parameters"
    :transform="transform"
  />
</template>
