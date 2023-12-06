import { errorPage } from "@/assets/img";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="min-h-screen max-w-full flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center flex-col 2xl:gap-8 gap-4">
        <Image
          width={520}
          height={272}
          src={errorPage}
          alt="error"
          className="2xl:block hidden"
        />
        <Image
          width={288}
          height={151}
          src={errorPage}
          alt="error"
          className="2xl:hidden block"
        />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="2xl:text-[32px] text-lg font-black 2xl:leading-10 leading-6">
            Ошибка 404!
          </h1>
          <p className="2xl:text-base text-xs 2xl:leading-6 leading-4">
            Что-то пошло не так. Страница которую вы ищите недоступна!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
