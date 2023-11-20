import localfont from "next/font/local";
import { Dela_Gothic_One } from "next/font/google";

export const calibry = localfont({ src: "./Calibri-Light.woff2" });

export const delagothicone = Dela_Gothic_One({
    subsets: ["cyrillic"],
    weight: ["400"],
  });