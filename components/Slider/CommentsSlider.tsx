"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { comments } from "@/constants/comments";
import { useState } from "react";
import clsx from "clsx";

export const CommentsSlider = () => {
  const [isSlideNumber, setisSlideNumber] = useState(0);

  return (
    <>
      <Carousel
        loop
        className="overflow-clip"
        navigation={() => <></>}
        prevArrow={({ handlePrev, activeIndex }) => {
          setisSlideNumber(activeIndex);

          return (
            <button
              onClick={handlePrev}
              className="2xl:w-8 w-6 2xl:h-8 h-6 rounded-full bg-black/50 !absolute top-2/4 left-0 z-[999999] -translate-y-2/4 flex justify-center items-center text-white"
            >
              <IoIosArrowBack className="2xl:w-4 w-2 2xl:h-4 h-2" />
            </button>
          );
        }}
        nextArrow={({ handleNext, activeIndex }) => {
          setisSlideNumber(activeIndex);

          return (
            <button
              onClick={handleNext}
              className="2xl:w-8 w-6 2xl:h-8 h-6 rounded-full bg-black/50 !absolute top-2/4 !right-0 -translate-y-2/4 flex justify-center items-center text-white"
            >
              <IoIosArrowForward className="2xl:w-4 w-2 2xl:h-4 h-2" />
            </button>
          );
        }}
      >
        {comments.map(({ description, id, name, role }) => (
          <div key={id} className="flex flex-col gap-8 items-center">
            <p className="2xl:w-[860px] w-full text-center 2xl:text-lg text-xs font-medium 2xl:leading-6 leading-[18px]">
              {description}
            </p>

            <div className="">
              <p className="text-center 2xl:text-lg text-base font-bold leading-6">{name}</p>
              <p className="text-center 2xl:text-base text-sm font-medium leading-4 text-[#BBBBBB]">
                {role}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="flex items-center gap-4">
        {comments.map(({ img, id }, idx) => (
          <Image
            className={clsx(isSlideNumber !== idx && "opacity-50")}
            width={48}
            height={48}
            key={id}
            src={img}
            alt="comment"
          />
        ))}
      </div>
    </>
  );
};
