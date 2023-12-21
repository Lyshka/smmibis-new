import CyrillicToTranslit from "cyrillic-to-translit-js";

const cyrillicToTranslit = CyrillicToTranslit({
  preset: "ru",
});

export const translatorToEn = (stringRu: string) => {
  return cyrillicToTranslit
    .transform(stringRu, "-")
    .toLowerCase()
    .replace("?", "")
    .replace(":", "");
};
