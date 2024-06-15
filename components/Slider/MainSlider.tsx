"use client";

import { Carousel } from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { slidesMain } from "@/constants/slides";
import { MainSlide } from "./MainSlide";

export const MainSlider = () => {
  return (
    <Carousel
      loop
      className="w-full h-[calc(100vh-98px)]"
      navigation={({ setActiveIndex, activeIndex, length }) => {
        return (
          <div className="absolute bottom-14 left-2/4 z-[999] flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full select-none cursor-pointer ${
                  activeIndex === i ? "bg-white" : "bg-[#bfbfbf]"
                } bg-[#E5E5E5] 2xl:w-4 w-2 2xl:h-4 h-2`}
              >
                &nbsp;
              </div>
            ))}
          </div>
        );
      }}
      prevArrow={({ handlePrev }) => (
        <button
          onClick={handlePrev}
          className="2xl:w-8 w-6 2xl:h-8 h-6 rounded-full bg-black/50 !absolute top-2/4 2xl:left-[10%] left-[1%] -translate-y-2/4 flex justify-center items-center text-white"
        >
          <IoIosArrowBack className="2xl:w-4 w-2 2xl:h-4 h-2" />
        </button>
      )}
      nextArrow={({ handleNext }) => (
        <button
          onClick={handleNext}
          className="2xl:w-8 w-6 2xl:h-8 h-6 rounded-full bg-black/50 !absolute top-2/4 2xl:!right-[10%] right-[1%] -translate-y-2/4 flex justify-center items-center text-white"
        >
          <IoIosArrowForward className="2xl:w-4 w-2 2xl:h-4 h-2" />
        </button>
      )}
    >
      {slidesMain.map(
        ({ description, id, img, imgMobile, title, buttonText, textPrice }) => (
          <MainSlide
            key={id}
            img={img}
            imgMobile={imgMobile}
            title={title}
            buttonText={buttonText}
            description={description}
            textPrice={textPrice}
          />
        )
      )}
    </Carousel>
  );
};
