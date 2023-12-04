"use client";

import { MainContext } from "@/context/MainContext";
import { Alert } from "@material-tailwind/react";
import { useContext } from "react";

export const AlertSuccess = () => {
  const { isOpenGratitude } = useContext(MainContext);

  return (
    <div className="fixed z-[99999] bottom-5 left-1/2 -translate-x-1/2">
      <Alert
        open={isOpenGratitude}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        Спасибо за заявку, мы скоро с вами свяжемся
      </Alert>
    </div>
  );
};
