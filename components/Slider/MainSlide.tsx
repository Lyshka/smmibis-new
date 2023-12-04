import Image, { StaticImageData } from "next/image";
import { Button } from "../Button/Button";
import { delagothicone } from "@/assets/font";
import { useContext } from "react";
import { MainContext } from "@/context/MainContext";

interface IMainSlide {
  title: string;
  description: string;
  buttonText: string;
  img: StaticImageData;
  imgMobile: StaticImageData;
}

export const MainSlide = ({
  img,
  imgMobile,
  title,
  description,
  buttonText,
}: IMainSlide) => {
  const { toggleFeedBack } = useContext(MainContext);

  return (
    <div className="h-full w-full relative flex justify-center items-center">
      <Image
        src={img}
        priority={true}
        alt="main_slide_1"
        className="2xl:block hidden h-full w-full object-cover"
      />
      <Image
        src={imgMobile}
        priority={true}
        alt="main_slide_1"
        className="2xl:hidden block h-full w-full object-cover"
      />
      <div className="absolute 2xl:px-0 px-10">
        <div className="2xl:w-[829px] w-full 2xl:p-10 p-6 flex flex-col 2xl:gap-10 gap-8 rounded-2xl bg-black/[.15] backdrop-blur-[12.5px]">
          <div className="flex flex-col 2xl:gap-8 gap-4 text-white">
            <div>
              <p className="2xl:text-xl text-sm font-light 2xl:leading-8 left-4 uppercase">
                Ибис маркетинг
              </p>

              <h3
                className={`2xl:text-[50px] text-[26px] 2xl:leading-[58px] leading-8 ${delagothicone.className}`}
              >
                {title}
              </h3>
            </div>

            <p className="2xl:text-base text-xs 2xl:leading-4 2xl:tracking-[0.16px] tracking-[0.12px]">
              {description}
            </p>
          </div>

          <div className="2xl:flex">
            <Button
              onClick={toggleFeedBack}
              className="2xl:w-auto w-full uppercase"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
