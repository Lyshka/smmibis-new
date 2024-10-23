"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Categories, projects } from "@/constants/projects";
import { Title } from "../Title/Title";
import { SelectedMenu } from "./SelectedMenu";
import { Button } from "../Button/Button";
import { CardProject } from "./CardProject";
import { MainContext } from "@/context/MainContext";

export const Projects = () => {
  const { categoryProjects } = useContext(MainContext);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const onDownloadPortfolio = () => {
    window.location.href = `/portf.pptx`;
  };

  useEffect(() => {
    if (categoryProjects === Categories.all)
      return setFilteredProjects(projects);

    const filtered = projects.filter(
      ({ category }) => category === categoryProjects
    );

    setFilteredProjects(filtered);
  }, [categoryProjects]);

  return (
    <section id="portfolio" className="flex justify-center items-center">
      <div className="container 2xl:py-[60px] py-6 flex flex-col 2xl:gap-10 gap-4">
        <div className="flex flex-col items-center w-full gap-4">
          <Title text="Проекты" />

          <SelectedMenu />
        </div>

        <div className="flex flex-col gap-10 justify-center items-center xl:max-w-[1300px] w-full">
          <Swiper
            modules={[Navigation]}
            className="w-full"
            navigation={{
              prevEl: "#swipperSliderHomePortfolioNavigation .prevBtn",
              nextEl: "#swipperSliderHomePortfolioNavigation .nextBtn",
            }}
            breakpoints={{
              1368: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              0: {
                width: 260,
                spaceBetween: 16,
              },
            }}
          >
            {filteredProjects.map(({ id, img, tags, title, category }) => (
              <SwiperSlide key={id}>
                <CardProject
                  img={img}
                  tags={tags}
                  title={title}
                  category={category}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <nav
            id="swipperSliderHomePortfolioNavigation"
            className="bg-[#F5F7FA] p-2 rounded-[32px]  flex items-center gap-4"
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

        <Button onClick={onDownloadPortfolio}>Скачать портфолио</Button>
      </div>
    </section >
  );
};
