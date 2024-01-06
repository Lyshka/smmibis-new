"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ImgZoomPopup } from "../Popup/ImgZoomPopup";

interface ICardProject {
  img: StaticImageData;
}

export const CardProject = ({ img }: ICardProject) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <div className="shadow-2xl 2xl:block contents">
      <Image
        className="2xl:block hidden cursor-pointer"
        width={417}
        height={416}
        src={img}
        alt="project"
        onClick={onOpen}
      />
      <Image
        className="2xl:hidden inline-block cursor-pointer"
        width={272}
        height={272}
        src={img}
        alt="project"
        onClick={onOpen}
      />

      {open && <ImgZoomPopup onOpen={onOpen} img={img} />}
    </div>
  );
};
