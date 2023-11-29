"use client";

import { Categories } from "@/constants/projects";
import { ReactNode, createContext, useState } from "react";

interface IMainContext {
  isOpenMenuHeader: boolean;
  toggleMenuHeader?: () => void;
  isOpenFeedBack: boolean;
  toggleFeedBack?: () => void;
  categoryProjects: Categories;
  onSelect: (title: Categories) => void;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext<IMainContext>({
  isOpenMenuHeader: false,
  categoryProjects: Categories.all,
  onSelect(title) {},
  isOpenFeedBack: false,
});

export const MainContextProvider = ({ children }: IMainContextProvider) => {
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState(false);
  const [isOpenFeedBack, setisOpenFeedBack] = useState(false);
  const [categoryProjects, setCategoryProjects] = useState<Categories>(
    Categories.all
  );

  const toggleMenuHeader = () => {
    setIsOpenMenuHeader((prv) => !prv);
  };

  const toggleFeedBack = () => {
    setisOpenFeedBack((prv) => !prv);
  };

  const onSelect = (title: Categories) => {
    setCategoryProjects(title);
  };

  return (
    <MainContext.Provider
      value={{
        isOpenMenuHeader,
        toggleMenuHeader,
        categoryProjects,
        onSelect,
        isOpenFeedBack,
        toggleFeedBack,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
