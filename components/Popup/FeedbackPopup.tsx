"use client";

import { popUpFeedback } from "@/assets/img";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { PopupFeedbackForm } from "../Form/PopupFeedbackForm";
import { useContext } from "react";
import { MainContext } from "@/context/MainContext";

export const FeedbackPopup = () => {
  const { toggleFeedBack, isOpenFeedBack } = useContext(MainContext);

  return (
    <>
      {isOpenFeedBack && (
        <section className="h-screen fixed bg-black/50 inset-0 flex justify-center items-center z-[999] 2xl:px-0 px-4">
          <div className="rounded-lg flex 2xl:flex-row flex-col bg-white relative">
            <IoIosClose
              onClick={toggleFeedBack}
              className="w-6 h-6 flex justify-center items-center absolute right-2 top-2 cursor-pointer 2xl:text-[#333] text-white"
            />
            <Image
              width={331}
              src={popUpFeedback}
              alt="Feedback"
              className="2xl:block hidden w-[331px] h-full"
            />
            <Image
              src={popUpFeedback}
              alt="Feedback"
              height={200}
              className="2xl:hidden block w-full h-[200px]"
            />
            <PopupFeedbackForm />
          </div>
        </section>
      )}
    </>
  );
};
