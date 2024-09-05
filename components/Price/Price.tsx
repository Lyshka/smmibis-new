"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { priceList } from "@/constants/price";
import { Title } from "../Title/Title";
import { CardPrice } from "./CardPrice";
import "swiper/css";

export const Price = () => {
  return (
    <section className="flex justify-center items-center w-full xl:px-0 px-7 max-w-[1368px] mx-auto overflow-hidden">
      <div className="flex flex-col 2xl:gap-20 gap-10 items-center w-full">
        <Title text="Наши услуги" />

        <Swiper
          modules={[Navigation]}
          id="swipperSliderHomePrice"
          centeredSlides
          onSlideChange={(swiper) => {
            const isMobile = window.innerWidth <= 768;

            if (!isMobile) {
              const slides = swiper.slides;
              slides.forEach((slide, index) => {
                const isActive = index === swiper.activeIndex;
                slide.style.transform = isActive ? "scale(1.1)" : "scale(1)";
                slide.style.transition = "transform 0.3s ease";
              });
            }
          }}
          className="w-full"
          breakpoints={{
            1368: {
              slidesPerView: 3,
              initialSlide: 3,
              spaceBetween: 37,
              navigation: {
                prevEl: "#swipperSliderHomePriceNavigation .prevBtn",
                nextEl: "#swipperSliderHomePriceNavigation .nextBtn",
              },
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          {priceList.map((cardPrice) => (
            <SwiperSlide key={cardPrice.id}>
              <CardPrice cardPrice={cardPrice} />
            </SwiperSlide>
          ))}
        </Swiper>

        <nav
          id="swipperSliderHomePriceNavigation"
          className="bg-[#F5F7FA] p-2 rounded-[32px] xl:flex hidden items-center gap-4"
        >
          <button className="flex justify-center items-center w-8 h-8 bg-black/50 rounded-full prevBtn">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 12.166L6.5 8.16602L10.5 4.16602"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="flex justify-center items-center w-8 h-8 bg-black/50 rounded-full nextBtn">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 4.16602L10.5 8.16602L6.5 12.166"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </div>
    </section>
  );
};
