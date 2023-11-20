"use client";

import Image, { StaticImageData } from "next/image";
import { IoCloseOutline } from "react-icons/io5";

interface IImgZoomPopup {
  onOpen: () => void;
  img: StaticImageData;
}

export const ImgZoomPopup = ({ onOpen, img }: IImgZoomPopup) => {
  return (
    <div className="fixed h-screen w-full bg-black/95 inset-0 z-[999] flex justify-center items-center">
      <Image
        className="2xl:block hidden h-4/5 w-4/5 object-contain"
        src={img}
        alt="project"
      />
      <Image
        className="2xl:hidden inline-block h-4/5 w-4/5 object-contain"
        src={img}
        alt="project"
      />

      <button onClick={onOpen} className="absolute top-5 right-5">
        <IoCloseOutline className="text-white w-10 h-10" />
      </button>
    </div>
  );
};
