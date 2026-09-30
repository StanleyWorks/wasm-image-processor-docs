<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { grayscale } from "wasm-image-processor";

const parameters: [] = [];
const transform = (bytes: Uint8Array) => grayscale(bytes);
</script>

<template>
  <ImageWorkbench
    title="Grayscale"
    description="Remove color to see your image in shades of gray."
    operation="grayscale"
    :parameters="parameters"
    :transform="transform"
  />
</template>
