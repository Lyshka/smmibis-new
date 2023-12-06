export const checkLengthNumber = (value: string | undefined) => {
  if (!value) return;

  if (value.startsWith("375")) {
    return value.length === 12;
  }

  if (value.startsWith("7")) {
    return value.length === 11;
  }
};
