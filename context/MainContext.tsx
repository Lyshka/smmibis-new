"use client";

import { Categories } from "@/constants/projects";
import { ReactNode, createContext, useState } from "react";

interface IMainContext {
  isOpenMenuHeader: boolean;
  toggleMenuHeader?: () => void;
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
});

export const MainContextProvider = ({ children }: IMainContextProvider) => {
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState(false);
  const [categoryProjects, setCategoryProjects] = useState<Categories>(
    Categories.all
  );

  const toggleMenuHeader = () => {
    setIsOpenMenuHeader((prv) => !prv);
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
