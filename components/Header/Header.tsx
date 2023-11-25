"use client";

import { useContext } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

import { mainMenu } from "@/constants/menu";
import { MenuMobileHeader } from "./MenuMobileHeader";
import { MainContext } from "@/context/MainContext";
import { calibry } from "@/assets/font";

export const Header = () => {
  const { isOpenMenuHeader, toggleMenuHeader } = useContext(MainContext);

  return (
    <header className="flex 2xl:flex-row flex-col justify-center items-center 2xl:py-4 py-0 border-b-2 border-[#F4F4F4]">
      <div className="container">
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

        <nav className="2xl:hidden">
          <button
            onClick={toggleMenuHeader}
            className="flex justify-center items-center"
          >
            {isOpenMenuHeader && <CgClose className="h-8 w-8" />}
            {!isOpenMenuHeader && <RxHamburgerMenu className="h-8 w-8" />}
          </button>
        </nav>

        <ul className="hidden 2xl:flex items-center gap-10">
          {mainMenu.map(({ title, url, id }) => (
            <li key={id} className="list-header-li hover:text-main uppercase">
              <Link href={url}>{title}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden 2xl:flex flex-col gap-2">
          <Link className="flex items-center gap-4" href={"tel:+375339157676"}>
            <LuPhone className="w-6 h-6" />
            <span className="whitespace-nowrap">+375 (33) 915 - 76 - 76</span>
          </Link>
          <Link
            className="flex items-center gap-4"
            href={"mailto:mail@smm-ibis.by"}
          >
            <MdOutlineMailOutline className="w-6 h-6" />
            mail@smm-ibis.by
          </Link>
        </div>
      </div>

      <div className="container 2xl:hidden py-0">
        <MenuMobileHeader />
      </div>
    </header>
  );
};
