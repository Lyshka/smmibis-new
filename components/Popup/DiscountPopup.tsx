"use client";

import { delagothicone } from "@/assets/font";
import { IoIosClose } from "react-icons/io";
import { PopupMainForm } from "../Form/PopupMainForm";
import { useEffect, useState } from "react";

export const DiscountPopup = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      {open && (
        <section className="h-screen w-full fixed bg-black/50 inset-0 flex justify-center items-center z-[999] 2xl:px-0 px-4">
          <div className="2xl:container rounded-2xl 2xl:p-[104px] p-4 bg-white relative">
            <IoIosClose
              onClick={handleClose}
              className="w-6 h-6 flex justify-center items-center absolute right-6 top-6 cursor-pointer"
            />

            <div className="flex 2xl:flex-row flex-col 2xl:gap-6 gap-8 2xl:items-center">
              <div className="flex flex-col justify-center 2xl:gap-6 gap-4 flex-1">
                <h6
                  className={`${delagothicone.className} 2xl:text-[32px] text-lg 2xl:leading-10 leading-6`}
                >
                  Скидка специально для Вас!
                </h6>

                <p className="2xl:text-lg text-xs 2xl:leading-6 leading-4">
                  Отправляйте заявку прямо сейчас и именно для Вас мы составим
                  специальное предложение!
                </p>
              </div>

              <PopupMainForm />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
