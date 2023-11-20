import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { ReactNode } from "react";

interface IMainLayout {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="min-h-screen max-w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
