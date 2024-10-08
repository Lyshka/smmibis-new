"use client";

import { MainContext } from "@/context/MainContext";
import { useContext } from "react";

export const CardBuisnes = () => {
  const edges = [
    "Разработка сайта (лендинг, корпоративный сайт, интернет-магазин)",
    "Дизайн логотипа",
    "Помощь с регистрацией хостинга+домена",
    "SSL - сертификат сайта",
    "SEO - продвижение",
    "Настройка контекстной рекламы",
  ];

  const { toggleFeedBack } = useContext(MainContext);

  return (
    <div className="xl:p-6 p-4 xl:h-[646px] h-full flex flex-col xl:justify-between xl:gap-0 gap-7 busnes-card-home-bg rounded-lg xl:leading-6 leading-4">
      <div className="xl:space-y-8 space-y-[22px] text-white">
        <p className="xl:text-[40px] text-2xl font-extrabold">Бизнес-старт</p>

        <div className="xl:space-y-2 space-y-1">
          <p className="line-through xl:text-[30px] text-xl">2499</p>
          <p className="flex items-center xl:gap-[5px] gap-[3px] xl:leading-10 leading-7 xl:text-[32px] text-2xl font-medium">
            <span>1499</span>

            <span>BYN</span>
          </p>
        </div>

        <ul className="xl:space-y-4 space-y-2.5">
          {edges.map((title, idx) => (
            <div key={idx} className="flex items-center xl:gap-4 gap-2.5">
              <svg
                className="flex-shrink-0 xl:w-4 w-2.5 xl:h-4 h-2.5"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3332 4L5.99984 11.3333L2.6665 8"
                  stroke="#F4F8FA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="xl:text-base text-xs">{title}</span>
            </div>
          ))}
        </ul>
      </div>

      <button
        onClick={toggleFeedBack}
        className="bg-[#4328EB] xl:py-3.5 py-2.5 w-full px-[30px] flex justify-center items-center text-white text-center font-medium xl:text-base text-sm rounded-[40px]"
      >
        Получить КП
      </button>
    </div>
  );
};
