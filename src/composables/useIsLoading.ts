import { ref } from "vue";

const loading = ref<boolean>(false);

export function useIsLoading() {
  return loading;
}
