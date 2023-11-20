import { delagothicone } from "@/assets/font";
import { ReactNode } from "react";

interface ICardAbout {
  title: string;
  description: string;
  img: ReactNode;
}

export const CardAbout = ({ img, title, description }: ICardAbout) => {
  return (
    <div className="flex gap-6 items-center w-full">
      <div className="flex justify-center items-center 2xl:w-24 w-16 2xl:max-h-24 max-h-16 rounded-md border-[3px] border-main 2xl:p-2 p-[5.333px]">
        {img}
      </div>

      <div className="flex flex-col justify-center gap-2 2xl:w-[239px] w-full">
        <h5 className={`${delagothicone.className} text-base`}>{title}</h5>

        <p className="text-[#BBBBBB] text-sm left-4">{description}</p>
      </div>
    </div>
  );
};
