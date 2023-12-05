"use client";

import { Categories } from "@/constants/projects";
import { ReactNode, createContext, useState } from "react";

interface IMainContext {
  categoryProjects: Categories;
  isOpenMenuHeader: boolean;
  isOpenGratitude: boolean;
  isOpenFeedBack: boolean;
  isOpenDiscount: boolean;
  onSelect: (title: Categories) => void;
  toggleGratitude: (state: boolean) => void;
  toggleFeedBack: () => void;
  toggleDiscount: () => void;
  toggleMenuHeader?: () => void;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext<IMainContext>({
  categoryProjects: Categories.all,
  isOpenMenuHeader: false,
  isOpenGratitude: false,
  isOpenFeedBack: false,
  isOpenDiscount: false,
  onSelect(title) {},
  toggleGratitude(state) {},
  toggleFeedBack() {},
  toggleDiscount() {},
});

export const MainContextProvider = ({ children }: IMainContextProvider) => {
  const [categoryProjects, setCategoryProjects] = useState<Categories>(
    Categories.all
  );
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState(false);
  const [isOpenGratitude, setIsOpenGratitude] = useState(false);
  const [isOpenFeedBack, setisOpenFeedBack] = useState(false);
  const [isOpenDiscount, setIsOpenDiscount] = useState(false);

  const onSelect = (title: Categories) => {
    setCategoryProjects(title);
  };

  const toggleGratitude = (state: boolean) => {
    setIsOpenGratitude(state);
  };

  const toggleFeedBack = () => {
    setisOpenFeedBack((prv) => !prv);
  };

  const toggleMenuHeader = () => {
    setIsOpenMenuHeader((prv) => !prv);
  };

  const toggleDiscount = () => {
    setIsOpenDiscount((prv) => !prv);
  };

  return (
    <MainContext.Provider
      value={{
        categoryProjects,
        isOpenMenuHeader,
        isOpenGratitude,
        isOpenFeedBack,
        isOpenDiscount,
        onSelect,
        toggleGratitude,
        toggleFeedBack,
        toggleMenuHeader,
        toggleDiscount,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
