"use client";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { news } from "@/constants/news";
import { Carousel } from "@material-tailwind/react";
import { Button } from "../Button/Button";
import { delagothicone } from "@/assets/font";
import Link from "next/link";
import { translatorToEn } from "@/utils/translator";

export const MobileNewsSlider = () => {
  return (
    <Carousel
      loop
      id="scrollNews"
      className="2xl:hidden flex overflow-x-scroll gap-6"
      navigation={() => <></>}
      prevArrow={({}) => <></>}
      nextArrow={({}) => <></>}
    >
      {news.map(({ date, id, img, title, shortDescription }) => {
        const newUrl = translatorToEn(title);

        return (
          <Link
            href={`/news/${newUrl}`}
            key={id}
            className="flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <h5
                className={`${delagothicone.className} flex-1 text-xs h-6 w-4/5 leading-4`}
              >
                {title}
              </h5>

              <span className="text-[#999] text-right text-[10px] leading-4">
                {date}
              </span>
            </div>

            <Image
              className="self-stretch rounded-[4px] w-full h-60"
              src={img}
              height={144}
              alt="news"
            />

            <div className="flex flex-col gap-2">
              <p className="h-8 text-xs leading-4 text-hidden-news">
                {shortDescription}...
              </p>

              <Button className="2xl:py-2">Подробнее</Button>
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
};
