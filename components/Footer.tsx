import Link from "next/link";
import { FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";

import { calibry } from "@/assets/font";
import { TelegramIcon } from "@/assets/img/TelegramIcon";
import { footerMenuJobs } from "@/constants/menu";

export const Footer = () => {
  return (
    <footer className="bg-[#171717] 2xl:py-12 py-6 flex flex-col justify-center items-center text-white">
      <div className="container-footer">
        <div className="flex flex-col gap-6 2xl:w-[307px] w-full items-start">
          <Link
            href={"/"}
            className="w-17 h-16 2xl:p-2 p-0 flex justify-center items-center"
          >
            <h1
              className={`${calibry.className} text-[47.972px] tracking-[-3.838px] logo-background w-[60px] h-[60px] flex justify-center items-center`}
            >
              IBIS
            </h1>
          </Link>

          <p className="font-medium 2xl:text-base text-sm">
            Ибис маркетинг — цифровое маркетинговое агентство полного цикла.
          </p>

          <ul className="flex flex-col">
            {footerMenuJobs.map(({ id, title }) => (
              <li key={id} className="footer-ul-jobs">
                {title}
              </li>
            ))}
          </ul>

          <p className="footer-ul-jobs 2xl:block hidden">УНП 791294932</p>
        </div>

        <div className="2xl:w-[307px] w-full 2xl:mt-0 mt-10">
          <div className="flex flex-col gap-6 2xl:items-end items-start">
            <div className="flex flex-col gap-4">
              <p className="font-medium 2xl:text-right">Социальные сети:</p>

              <div className="text-white flex gap-6 items-center">
                <Link
                  href={"/"}
                  className={
                    "border border-white rounded-full w-8 h-8 flex justify-center items-center group hover:border-main"
                  }
                >
                  <FaInstagram className="group-hover:fill-main" />
                </Link>
                <Link
                  href={"/"}
                  className={
                    "border border-white rounded-full w-8 h-8 flex justify-center items-center group hover:border-main"
                  }
                >
                  <TelegramIcon className="group-hover:fill-main" />
                </Link>
                <Link
                  href={"/"}
                  className={
                    "border border-white rounded-full w-8 h-8 flex justify-center items-center group hover:border-main"
                  }
                >
                  <FaWhatsapp className="group-hover:fill-main" />
                </Link>
                <Link
                  href={"/"}
                  className={
                    "border border-white rounded-full w-8 h-8 flex justify-center items-center group hover:border-main"
                  }
                >
                  <FaViber className="group-hover:fill-main" />
                </Link>
              </div>
            </div>

            <p className="text-left text-[#BBBBBB] text-sm">
              © Все права защищены Ибис Маркетинг 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
