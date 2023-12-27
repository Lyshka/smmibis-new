import Image, { StaticImageData } from "next/image";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

interface ICardNews {
  news: {
    id: number;
    title: string;
    date: string;
    description: string;
    shortDescription: string;
    img: StaticImageData;
  };
}

export const CardNews = ({ news }: ICardNews) => {
  const { date, shortDescription, img, title } = news;

  return (
    <div className="flex flex-col">
      <Image
        src={img}
        alt="news"
        height={216}
        className="2xl:block hidden rounded-t-lg w-full h-[216px]"
      />

      <Image
        src={img}
        alt="news"
        height={160}
        className="2xl:hidden block rounded-t-[18px] w-full h-[160]"
      />

      <div className="flex p-4 flex-col gap-6 bg-[#F4F4F4] 2xl:rounded-b-lg rounded-b-[18px]">
        <div className="flex flex-col gap-4">
          <h2 className="2xl:text-lg text-sm 2xl:h-12 h-7 font-bold leading-6">
            {title}
          </h2>

          <p className="text-hidden-news 2xl:text-sm text-[10px] 2xl:leading-6 leading-4">
            {shortDescription}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <span className="2xl:text-sm text-[10px] 2xl:leading-6 leading-4 text-[#A5A5A5]">
            {date}
          </span>

          <div className="2xl:rounded-[40px] rounded-3xl 2xl:p-2 p-[4.8px] flex justify-center items-center border-2 border-[#333]">
            <HiOutlineArrowSmallRight className="2xl:w-6 w-[14.4px] 2xl:h-6 h-[14.4px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
