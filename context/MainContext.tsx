"use client";

import { Categories } from "@/constants/projects";
import { ReactNode, createContext, useState } from "react";

type ErrorTel = {
  stateError: boolean;
  tel?: string;
};

interface IMainContext {
  categoryProjects: Categories;
  isOpenMenuHeader: boolean;
  isOpenGratitude: boolean;
  isOpenFeedBack: boolean;
  isOpenDiscount: boolean;
  isErrorTel: ErrorTel;
  onSelect: (title: Categories) => void;
  toggleGratitude: (state: boolean) => void;
  toggleFeedBack: () => void;
  toggleDiscount: () => void;
  toggleMenuHeader?: () => void;
  toggleErrorTel: ({ stateError, tel }: ErrorTel) => void;
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
  isErrorTel: { stateError: false, tel: "" },
  onSelect(title) {},
  toggleGratitude(state) {},
  toggleFeedBack() {},
  toggleDiscount() {},
  toggleErrorTel({ stateError, tel }) {},
});

export const MainContextProvider = ({ children }: IMainContextProvider) => {
  const [categoryProjects, setCategoryProjects] = useState<Categories>(
    Categories.all
  );
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState(false);
  const [isOpenGratitude, setIsOpenGratitude] = useState(false);
  const [isOpenFeedBack, setisOpenFeedBack] = useState(false);
  const [isOpenDiscount, setIsOpenDiscount] = useState(false);
  const [isErrorTel, setIsErrorTel] = useState<ErrorTel>({
    stateError: false,
    tel: "",
  });

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

  const toggleErrorTel = ({ stateError, tel }: ErrorTel) => {
    setIsErrorTel((prv) => ({
      ...prv,
      stateError,
      tel,
    }));
  };

  return (
    <MainContext.Provider
      value={{
        categoryProjects,
        isOpenMenuHeader,
        isOpenGratitude,
        isOpenFeedBack,
        isOpenDiscount,
        isErrorTel,
        onSelect,
        toggleGratitude,
        toggleFeedBack,
        toggleMenuHeader,
        toggleDiscount,
        toggleErrorTel,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
