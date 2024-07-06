import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import { MainContextProvider } from "@/context/MainContext";

const jost = Jost({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Ибис маркетинг| Создание сайтов| SMM |Реклама",
  description:
    "Ибис маркетинг — цифровое маркетинговое агентство полного цикла в Могилеве. SMM | Разработка сайтов | обслуживание сайтов| SEO| Таргет и контекстная реклама | Дизайн | Создание контента",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MainContextProvider>
        <body className={`${jost.className} overflow-x-hidden`}>{children}</body>
      </MainContextProvider>
    </html>
  );
}
