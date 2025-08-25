export function useFileSize(file: File) {
  const formatFileSize = (bytes: number) => {
    const units = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte"];
    let unitIndex = 0;
    let size = bytes;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    const formatter = new Intl.NumberFormat(undefined, {
      style: "unit",
      unit: units[unitIndex],
      maximumFractionDigits: 1,
    });

    return formatter.format(size);
  };

  return formatFileSize(file.size);
}
