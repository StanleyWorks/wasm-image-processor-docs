<script setup lang="ts">
import ImageWorkbench from "@/components/ImageWorkbench.vue";
import { invert } from "wasm-image-processor";

const parameters: [] = [];
const transform = (bytes: Uint8Array) => invert(bytes);
</script>

<template>
  <ImageWorkbench
    title="Invert"
    description="Reverse the colors of your image to create a negative."
    operation="invert"
    :parameters="parameters"
    :transform="transform"
  />
</template>
