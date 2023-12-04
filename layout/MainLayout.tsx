import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import Script from "next/script";

interface IMainLayout {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="min-h-screen max-w-full">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JBFF7RBJKL" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-JBFF7RBJKL');
        `}
      </Script>
      <NextTopLoader />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
