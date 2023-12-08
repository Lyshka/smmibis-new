import { cookieMan, gifts, showNewYear, showNewYearMobile } from "@/assets/img";
import Image from "next/image";
import Link from "next/link";

interface INewYearBadge {
  textBadge: string | undefined;
}

export const NewYearBadge = ({ textBadge }: INewYearBadge) => {
  if (!textBadge) return;

  return (
    <section className="rounded-lg bg-main p-4 2xl:pb-4 pb-0 flex 2xl:flex-row flex-col 2xl:gap-0 gap-4 justify-between items-center relative">
      <Image
        src={showNewYear}
        alt="snow"
        className="absolute 2xl:block hidden"
      />
      <Image
        src={showNewYearMobile}
        alt="snow"
        className="absolute 2xl:hidden block"
      />
      <div className="text-white flex flex-col 2xl:gap-8 gap-4 2xl:w-[390px]  w-full relative z-20">
        <h5 className="text-xl font-extrabold leading-6">
          Новогодние подарки от IBIS
        </h5>

        <div className="flex flex-col 2xl:gap-4 gap-2">
          <p className="2xl:text-base text-xs font-semibold 2xl:leading-5 leading-4">
            {textBadge}
          </p>

          <Link href={"#formService"}>
            <button className="py-2 px-4 rounded-[100px] bg-white text-center text-base font-medium leading-4 text-main">
              Получить подарок
            </button>
          </Link>
        </div>
      </div>

      <div className="2xl:flex hidden absolute right-0 bottom-0 justify-center">
        <Image
          className="relative 2xl:translate-x-[65%]"
          src={cookieMan}
          alt="cookieMan"
        />
        <Image className="relative z-10" src={gifts} alt="cookieMan" />
      </div>

      <div className="2xl:hidden flex relative h-[150px] w-full overflow-hidden">
        <Image
          className="absolute bottom-0 -translate-x-[20%]"
          src={cookieMan}
          alt="cookieMan"
          width={345}
        />
        <Image
          width={274}
          className="absolute bottom-0 translate-x-[20%]"
          src={gifts}
          alt="cookieMan"
        />
      </div>
    </section>
  );
};
