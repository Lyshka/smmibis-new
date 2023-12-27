import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import { MainContextProvider } from "@/context/MainContext";

const jost = Jost({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Ибис маркетинг| Создание сайтов| SMM |Реклама",
  description: "Агентство Ибис Маркетинг занимается разработкой продающих сайтов, продвижением в соц. сетях, SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <MainContextProvider>
          <body className={jost.className}>{children}</body>
        </MainContextProvider>
    </html>
  );
}
