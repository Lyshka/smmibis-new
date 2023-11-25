import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";

interface IMainLayout {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="min-h-screen max-w-full">
      <NextTopLoader />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
