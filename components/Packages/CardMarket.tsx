"use client";
import { MainContext } from "@/context/MainContext";
import { useContext, useState } from "react";

export const CardMarket = () => {
  const edges = [
    "Проведение аудита бизнеса",
    "Обслуживание сайта",
    "Разработка гипотез и воронок продаж",
    "Настройка таргетированной рекламы",
    "Настройка контекстной рекламы",
    "SMM - продвижение",
    "Стратегическое планирование",
    "Подготовка еженедельной и (или) ежемесячной отчетности о результатах маркетинговой деятельности",
    "Разработка мероприятий по улучшению эффективности маркетинговой деятельности организации",
  ];

  const [open, setOpen] = useState(false);
  const { toggleFeedBack } = useContext(MainContext);

  const handleOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <div
      className={`xl:p-6 p-4 ${
        open ? "h-full" : "xl:h-[646px] h-full"
      }  flex flex-col xl:justify-between xl:gap-0 bg-[#FF6058] rounded-lg xl:leading-6 leading-4`}
    >
      <div className="xl:space-y-8 space-y-[22px] text-white">
        <p className="xl:text-[30px] text-2xl xl:leading-[38px] leading-[26.69px] font-extrabold">
          Твой
          <br /> маркетинговый отдел
        </p>

        <div className="xl:space-y-2 space-y-1">
          <p className="line-through xl:text-[30px] text-xl">1999</p>
          <p className="flex items-center xl:gap-[5px] gap-[3px] xl:leading-10 leading-7 xl:text-[32px] text-2xl font-medium">
            <span>999</span>

            <span>BYN/в месяц</span>
          </p>
        </div>

        <ul
          className={`xl:space-y-4 space-y-2.5 ${
            open ? "h-full" : "xl:h-[260px] h-[180px] overflow-hidden"
          }`}
        >
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
        onClick={handleOpen}
        className="flex flex-col gap-1 xl:my-5 my-3.5 items-center xl:text-sm text-xs font-medium mx-auto text-white"
      >
        <span>{open ? "Скрыть" : "показать больше"}</span>

        <svg
          className={`${open ? "transform -scale-y-100" : "scale-y-100"}`}
          width="26"
          height="9"
          viewBox="0 0 26 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.79492L12.831 7.20337L25 1.79492"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <button
        onClick={toggleFeedBack}
        className="bg-white xl:py-3.5 py-2.5 w-full px-[30px] flex justify-center items-center text-[#4328EB] text-center font-medium xl:text-base text-sm rounded-[4px]"
      >
        Получить предложение
      </button>
    </div>
  );
};
