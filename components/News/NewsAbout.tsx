import { bgNews } from "@/assets/img";
import Image from "next/image";

export const NewsAbout = () => {
  return (
    <section>
      <div className="2xl:h-[496px] h-[136px] w-full relative flex justify-center items-center text-white">
        <Image
          src={bgNews}
          priority
          alt="bgNews"
          height={496}
          className="2xl:block hidden w-full h-[496px] absolute object-cover object-center"
        />

        <Image
          src={bgNews}
          priority
          alt="bgNews"
          height={136}
          className="2xl:hidden block w-full h-[136px] absolute object-cover object-center"
        />
        <div className="absolute top-0 bg-black/40 w-full h-full">&nbsp;</div>

        <div className="container z-10 relative flex flex-col items-start">
          <nav className="flex items-center gap-2 2xl:text-[13px] text-xs leading-4 relative 2xl:bottom-[148px] bottom-4">
            <span>Главная</span>
            <span>/</span>
            <span>Новости</span>
          </nav>

          <h1 className="2xl:text-5xl text-xl font-black 2xl:leading-[56px] leading-8">Новости</h1>
        </div>
      </div>
    </section>
  );
};
