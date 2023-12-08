"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { priceList } from "./Prices";
import clsx from "clsx";
import Link from "next/link";

interface IPriceCard {
  priceCard: priceList;
}

export const PriceCard = ({ priceCard }: IPriceCard) => {
  const {
    includeServices,
    valuableBYN,
    valuableRUB,
    month,
    description,
    title,
  } = priceCard;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <div className="flex flex-col flex-1 rounded-2xl bg-white shadow-card-prices">
      <h3 className="px-6 py-4 2xl:text-lg text-base font-extrabold leading-6">
        {title}
      </h3>

      <div>
        <div className="p-6 flex flex-1 flex-col items-center gap-4 bg-main text-white">
          <div className="flex gap-3 items-end font-bold leading-6 2xl:text-lg text-base">
            <span>От</span>
            <p className="2xl:text-[64px] text-[56px] font-black 2xl:leading-[64px] leading-[56px]">
              {valuableBYN}
            </p>
            <span className="flex-1">BYN{month && "/месяц"}</span>
          </div>
        </div>

        <div className="p-6 pt-0 flex flex-1 flex-col items-center gap-4 bg-main text-white">
          {valuableRUB && (
            <div className="flex gap-3 items-end font-bold leading-6 2xl:text-lg text-base">
              <span>От</span>
              <p className="2xl:text-[64px] text-[56px] font-black 2xl:leading-[64px] leading-[56px]">
                {valuableRUB}
              </p>
              <span className="flex-1">RUB{month && "/месяц"}</span>
            </div>
          )}

          <p
            className="text-base font-semibold leading-4"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <button
          onClick={handleOpen}
          className="flex py-4 px-6 justify-center items-center gap-2"
        >
          <span className="text-center text-base font-bold leading-4">
            Подробнее
          </span>
          <IoIosArrowDown className="w-4 h-4" />
        </button>

        {open && (
          <ul className={"flex flex-col transition-all duration-300"}>
            {includeServices.map(({ id, title }, idx) => {
              const odd = idx % 2 !== 0;

              return (
                <li
                  className={clsx(
                    "py-4 px-6 flex-1 2xl:text-base text-sm 2xl:leading-6 leading-4",
                    odd && "bg-[#F4F4F4]"
                  )}
                  key={id}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="p-6">
        <Link
          href={"#formService"}
          className="flex py-3 px-6 justify-center items-center rounded-[100px] border-2 border-main text-center text-sm font-extrabold leading-6 w-full uppercase"
        >
          Запросить предложение
        </Link>
      </div>
    </div>
  );
};
