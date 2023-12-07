import { PiCaretRightBold } from "react-icons/pi";
import Link from "next/link";

import { mainMenu } from "@/constants/menu";
import clsx from "clsx";

interface ITopMenuServices {
  idSevice: string;
}

export const TopMenuServices = ({ idSevice }: ITopMenuServices) => {
  return (
    <nav className="2xl:block hidden w-[221px] border-r-2 border-[#F4F4F4] sticky top-0">
      <ul className="flex flex-col">
        {mainMenu[3].addition?.map(({ title, url, id }) => {
          return (
            <Link key={id} href={`/services/${url}`}>
              <li
                className={clsx(
                  "p-4 flex items-center gap-6 hover:bg-main hover:text-white",
                  `${idSevice}` === url ? "bg-main text-white" : "bg-white"
                )}
              >
                <span className="text-sm leading-4 tracking-[1px] flex-1">
                  {title}
                </span>
                <PiCaretRightBold className="w-4 h-4" />
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
