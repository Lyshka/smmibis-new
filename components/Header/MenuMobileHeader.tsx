"use client";

import { MouseEvent, useContext, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

import { MainContext } from "@/context/MainContext";
import { mainMenu } from "@/constants/menu";
import clsx from "clsx";

export const MenuMobileHeader = () => {
  const { isOpenMenuHeader } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen((prv) => !prv);
  };

  return (
    <>
      {isOpenMenuHeader && (
        <div className="flex flex-col">
          <ul className="flex flex-col gap-6 border-b-2 border-[#F4F4F4] pb-4">
            {mainMenu.map(({ id, title, url, addition }) => (
              <li key={id} className="list-header-li group hover:text-main">
                <>
                  {Boolean(addition) && (
                    <div
                      className="flex items-center gap-2"
                      onClick={toggleSubMenu}
                    >
                      <Link href={url} className="uppercase">
                        {title}
                      </Link>
                      {
                        <IoIosArrowDown
                          className={clsx(
                            "w-4 h-4",
                            !isOpen && "rotate-0",
                            isOpen && "rotate-180",
                          )}
                        />
                      }
                    </div>
                  )}
                  {!Boolean(addition) && (
                    <>
                      <Link href={url} className="uppercase">
                        {title}
                      </Link>
                    </>
                  )}
                </>

                {Boolean(addition) && isOpen && <SubMenu addition={addition} />}
              </li>
            ))}
          </ul>

          <div className="py-6 flex flex-col gap-2 font-medium">
            <Link
              className="flex items-center gap-4"
              href={"tel:+375339157676"}
            >
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
      )}
    </>
  );
};

interface ISubMenu {
  addition:
    | {
        id: number;
        title: string;
        url: string;
      }[]
    | undefined;
}

const SubMenu = ({ addition }: ISubMenu) => {
  return (
    <ul className="p-6 pb-0 flex flex-col gap-6">
      {addition?.map(({ id, title, url }) => (
        <Link key={id} href={`/services/${url}`}>
          <li className="list-header-li-sub">{title}</li>
        </Link>
      ))}
    </ul>
  );
};
