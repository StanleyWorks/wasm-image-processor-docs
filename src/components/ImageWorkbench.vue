<script setup lang="ts">
import { reactive, watch } from "vue";
import { useImageWorkbench } from "@/composables/useImageWorkbench";

export interface Parameter {
  key: string;
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  hint?: string;
}
const props = defineProps<{
  title: string;
  description: string;
  operation: string;
  parameters?: Parameter[];
  transform: (bytes: Uint8Array, values: Record<string, number>) => Uint8Array;
}>();
const values = reactive<Record<string, number>>(
  Object.fromEntries((props.parameters ?? []).map((p) => [p.key, p.value])),
);
const {
  source,
  sourceUrl,
  sourceSize,
  result,
  resultUrl,
  resultSize,
  busy,
  error,
  status,
  onFileChange,
  useSample,
  process,
  clearResult,
  clear,
  formatSize,
} = useImageWorkbench();
watch(values, clearResult);
const submit = () => process(props.transform, { ...values }, props.operation);
</script>

<template>
  <section class="workbench" :aria-labelledby="`${operation}-title`">
    <header class="page-heading">
      <h1 :id="`${operation}-title`" tabindex="-1">{{ title }}</h1>
      <p>{{ description }}</p>
    </header>
    <div class="workbench-grid">
      <form class="controls" @submit.prevent="submit">
        <h2>Source image</h2>
        <label class="upload-control" :class="{ 'is-disabled': busy }">
          <span class="upload-symbol" aria-hidden="true">↥</span>
          <span>{{ source ? "Choose another image" : "Choose an image" }}</span>
          <span class="helper">PNG or JPEG</span>
          <input
            :id="`${operation}-file`"
            type="file"
            accept="image/png,image/jpeg"
            :disabled="busy"
            @change="onFileChange"
          />
        </label>
        <div class="source-actions">
          <button
            class="text-button"
            type="button"
            :disabled="busy"
            @click="useSample"
          >
            Use sample image
          </button>
          <button
            v-if="source"
            class="text-button"
            type="button"
            :disabled="busy"
            @click="clear"
          >
            Clear
          </button>
        </div>
        <p v-if="source" class="file-name">
          {{ source.name }} <span>{{ formatSize(source.size) }}</span>
        </p>
        <fieldset v-if="parameters?.length" :disabled="busy" class="settings">
          <legend>Settings</legend>
          <div class="parameter-grid">
            <div
              v-for="parameter in parameters"
              :key="parameter.key"
              class="field"
            >
              <label :for="`${operation}-${parameter.key}`">{{
                parameter.label
              }}</label>
              <input
                :id="`${operation}-${parameter.key}`"
                v-model.number="values[parameter.key]"
                type="number"
                required
                :min="parameter.min"
                :max="parameter.max"
                :step="parameter.step ?? 1"
                :aria-describedby="
                  parameter.hint
                    ? `${operation}-${parameter.key}-hint`
                    : undefined
                "
              />
              <p
                v-if="parameter.hint"
                :id="`${operation}-${parameter.key}-hint`"
                class="helper"
              >
                {{ parameter.hint }}
              </p>
            </div>
          </div>
        </fieldset>
        <p v-else class="helper no-settings">
          No settings needed. Choose an image and apply the effect.
        </p>
        <button
          class="button primary process-button"
          type="submit"
          :disabled="busy || !source"
          :aria-busy="busy"
        >
          {{ busy ? "Processing…" : title }}
          <span v-if="!busy" aria-hidden="true">↗</span>
        </button>
        <p v-if="error" class="error-message" role="alert">{{ error }}</p>
        <p class="privacy-note">Your image stays in your browser.</p>
      </form>
      <div class="preview-area" :aria-busy="busy">
        <div class="preview-heading">
          <h2>Image preview</h2>
          <span class="helper">{{
            result
              ? "Ready to download"
              : source
                ? "Ready to process"
                : "No image selected"
          }}</span>
        </div>
        <div class="preview-grid">
          <figure>
            <figcaption>
              <span>Original</span
              ><span v-if="sourceSize"
                >{{ sourceSize.width }} × {{ sourceSize.height }}</span
              >
            </figcaption>
            <div class="image-stage">
              <img
                v-if="sourceUrl"
                :src="sourceUrl"
                :width="sourceSize?.width"
                :height="sourceSize?.height"
                alt="Original image before processing"
              />
              <div v-else class="empty-preview">
                <span aria-hidden="true">＋</span>
                <p>Your starting point</p>
                <small>Choose an image or try the sample.</small>
              </div>
            </div>
          </figure>
          <figure>
            <figcaption>
              <span>Result</span
              ><span v-if="resultSize"
                >{{ resultSize.width }} × {{ resultSize.height }}</span
              >
            </figcaption>
            <div class="image-stage result-stage">
              <img
                v-if="resultUrl"
                :src="resultUrl"
                :width="resultSize?.width"
                :height="resultSize?.height"
                :alt="`Image after ${title.toLowerCase()}`"
              />
              <div v-else class="empty-preview">
                <span aria-hidden="true">↗</span>
                <p>
                  {{ busy ? "Processing your image" : "See the difference" }}
                </p>
                <small>{{
                  busy
                    ? "The result will appear here."
                    : "Apply the operation to preview the result."
                }}</small>
              </div>
            </div>
          </figure>
        </div>
        <div class="result-bar">
          <p role="status" aria-live="polite" aria-atomic="true">
            {{ status || "Original and result appear side by side." }}
          </p>
          <a
            v-if="result && resultUrl"
            class="button secondary"
            :href="resultUrl"
            :download="result.name"
            >Download <span aria-hidden="true">↓</span></a
          >
        </div>
      </div>
    </div>
  </section>
</template>
