"use client";

import { Categories } from "@/constants/projects";
import Image, { StaticImageData } from "next/image";

interface ICardProject {
  img: StaticImageData;
  tags: string[];
  title: string;
  category: Categories;
}

export const CardProject = ({ img, tags, title, category }: ICardProject) => {
  return (
    <div className="bg-[#F5F5F5] xl:rounded-[32px] rounded-2xl xl:pt-7 pt-4 xl:h-[592px] h-96 flex flex-col items-center justify-between xl:px-7 px-5 relative">
      <span className="absolute bg-[#BD2D2D] top-8 left-0 xl:p-1.5 p-1 xl:pl-6 pl-2.5 text-white xl:text-xl text-xs rounded-r-lg xl:leading-[21.72px] leading-[15.3px]">{category}</span>

      <div className="flex flex-col items-center gap-4">
        <p className="xl:text-[36px] text-xl xl:leading-[43px] text-center font-medium text-[#333333]">
          {title}
        </p>

        <ul className="xl:max-w-[312px] max-w-[164px] w-full flex flex-wrap gap-1 justify-between">
          {tags.map((tag, idx) => (
            <li
              className="bg-white xl:rounded-[20px] rounded-[10px] flex-1 xl:px-3.5 px-2 xl:py-1.5 py-0.5 xl:text-sm text-[10px] xl:leading-[20.56px] font-medium text-center"
              key={idx}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="xl:h-[381px] h-[200px] w-full flex justify-center items-center">
        <Image
          src={img}
          alt="Кейс"
          className="w-full h-full object-contain"
          width={360}
          height={381}
        />
      </div>
    </div>
  );
};
