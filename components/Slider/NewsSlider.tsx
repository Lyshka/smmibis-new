"use client";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";

import { news } from "@/constants/news";
import { Carousel } from "@material-tailwind/react";
import { Button } from "../Button/Button";
import { delagothicone } from "@/assets/font";
import Link from "next/link";
import { translatorToEn } from "@/utils/translator";

export const NewsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const newsLength = news.length;
  const newsLengthHalf = Math.round(newsLength / 2);
  const isInteger = Number.isInteger(newsLength / 2);
  const evenNews = news.filter((_, idx) => idx % 2 === 0);
  const oddNews = news.filter((_, idx) => idx % 2 !== 0);

  return (
    <Carousel
      loop
      className="overflow-news-margin overflow-clip 2xl:flex hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => {
        return (
          <div className="absolute bottom-0 2xl:right-0 right-2/4 2xl:translate-x-0 translate-x-2/4 z-[999] flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-[6.5px] select-none cursor-pointer ${
                  activeIndex === i ? "bg-[#333] w-4" : "w-2 bg-[#A7A7A7]"
                } h-2`}
              >
                &nbsp;
              </div>
            ))}
          </div>
        );
      }}
      prevArrow={({ handlePrev, activeIndex }) => {
        setActiveSlide(activeIndex);

        return (
          <button
            onClick={handlePrev}
            className="2xl:flex hidden 2xl:w-8 w-6 2xl:h-8 h-6 rounded-full bg-black/50 !absolute top-[calc(50%-2.5rem)] 2xl:-left-4 z-[999999] justify-center items-center text-white"
          >
            <IoIosArrowBack className="2xl:w-4 w-2 2xl:h-4 h-2" />
          </button>
        );
      }}
      nextArrow={({ handleNext, activeIndex }) => {
        setActiveSlide(activeIndex);

        return (
          <button
            onClick={handleNext}
            className="2xl:flex hidden 2xl:w-8 w-6 2xl:h-8 h-6 rounded-full bg-black/50 !absolute top-[calc(50%-2.5rem)] 2xl:-right-4 justify-center items-center text-white"
          >
            <IoIosArrowForward className="2xl:w-4 w-2 2xl:h-4 h-2" />
          </button>
        );
      }}
    >
      {Array.from({ length: newsLengthHalf }).map((_, idx) => {
        const evennewUrl = translatorToEn(evenNews[idx].title);
        const oddnewUrl = translatorToEn(oddNews[idx]?.title);

        return (
          <div
            key={idx}
            className={clsx(
              "grid grid-cols-2 mb-10 gap-6 transition-all duration-500",
              idx !== activeSlide ? "opacity-0" : "opacity-100"
            )}
          >
            <Link href={`/news/${evennewUrl}`} className="flex flex-col gap-4">
              <div className="flex justify-between ">
                <h5
                  className={`${delagothicone.className} text-xl w-4/5 leading-6 h-9`}
                >
                  {evenNews[idx].title}
                </h5>

                <span className="text-[#999] text-right text-xs leading-4">
                  {evenNews[idx].date}
                </span>
              </div>

              <Image
                className="h-80 self-stretch rounded-lg"
                src={evenNews[idx].img}
                alt="news"
              />

              <div className="flex justify-between">
                <p className="w-[350px] h-8 text-sm leading-4 text-hidden-news">
                  {evenNews[idx].description}
                </p>

                <Button className="2xl:py-2">Подробнее</Button>
              </div>
            </Link>
            {/* isInteger && idx !== newsLengthHalf - 1 && */}
            {(
              <Link href={`/news/${oddnewUrl}`} className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <h5
                    className={`${delagothicone.className} w-4/5 text-xl leading-6 h-9`}
                  >
                    {oddNews[idx].title}
                  </h5>

                  <span className="text-[#999] text-right text-xs leading-4">
                    {oddNews[idx].date}
                  </span>
                </div>

                <Image
                  className="h-80 self-stretch rounded-lg"
                  src={oddNews[idx].img}
                  alt="news"
                />

                <div className="flex justify-between">
                  <p className="w-[350px] h-8 text-sm leading-4 text-hidden-news">
                    {oddNews[idx].description}
                  </p>

                  <Button className="2xl:py-2">Подробнее</Button>
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </Carousel>
  );
};
