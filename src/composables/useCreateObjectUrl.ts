export function useCreateObjectUrl(file: File) {
  return URL.createObjectURL(file);
}
