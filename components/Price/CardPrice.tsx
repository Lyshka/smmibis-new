import Image, { StaticImageData } from "next/image";
import { delagothicone } from "@/assets/font";

interface ICardPrice {
  title: string;
  description: string;
  img: StaticImageData;
  newPrice: boolean | undefined;
}

export const CardPrice = ({
  title,
  description,
  img,
  newPrice,
}: ICardPrice) => {
  return (
    <div className="border-b border-[#BBBBBB] 2xl:py-6 py-2 flex 2xl:flex-row flex-col 2xl:justify-between justify-center 2xl:gap-10 gap-4 w-full">
      <h4
        className={`${delagothicone.className} 2xl:text-xl text-sm 2xl:leading-8 leading-4 2xl:w-[300px] w-full`}
      >
        {title}
      </h4>

      <div className="flex 2xl:flex-row 2xl:gap-6 gap-4 flex-col-reverse">
        <p className="2xl:text-lg text-xs 2xl:leading-8 leading-4 2xl:w-[418px] w-full">
          {description}
        </p>

        <div className="relative">
          <Image
            src={img}
            alt="priceList"
            width={417}
            height={168}
            className="2xl:block hidden rounded-lg object-cover"
          />

          <Image
            src={img}
            alt="priceList"
            height={168}
            className="2xl:hidden block rounded-lg object-cover w-full"
          />

          {newPrice && (
            <div className="bg-main flex justify-center items-center 2xl:w-14 2xl:h-14 w-8 h-8 rounded-full rotate-[25deg] text-white uppercase 2xl:text-sm text-[10px] font-extrabold 2xl:leading-5 leading-3 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              new
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
