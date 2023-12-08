import Image, { StaticImageData } from "next/image";
import { Button } from "../Button/Button";
import { delagothicone } from "@/assets/font";
import { useContext } from "react";
import { MainContext } from "@/context/MainContext";
import Link from "next/link";

interface IMainSlide {
  title: string;
  description: string;
  buttonText: string;
  img: StaticImageData;
  imgMobile: StaticImageData;
  link: string | undefined;
}

export const MainSlide = ({
  img,
  imgMobile,
  title,
  description,
  buttonText,
  link,
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

            <p
              className="2xl:text-base text-xs 2xl:leading-6 leading-4 2xl:tracking-[0.16px] tracking-[0.12px]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <div className="2xl:flex">
            <Link href={link ? link : ""}>
              <Button
                onClick={link ? () => {} : toggleFeedBack}
                className="2xl:w-auto w-full uppercase"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
