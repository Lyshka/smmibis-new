import { news } from "@/constants/news";
import { translatorToEn } from "@/utils/translator";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface INewsPage {
  idNews: string;
}

export const NewsPage = ({ idNews }: INewsPage) => {
  const filteredNews = news.filter(({ title }) => {
    const newTitle = translatorToEn(title);
    const decoded = decodeURIComponent(idNews);

    return newTitle === decoded;
  })[0];


  const date:string = filteredNews?.date;
  const description:string = filteredNews?.description;
  const img:StaticImageData = filteredNews?.img;
  const title:string = filteredNews?.title;
  const filteredNewsAll = news.filter(({ title }) => {
    const newTitle = translatorToEn(title);

    return newTitle !== idNews;
  });

  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-6 py-8 flex flex-col">
        <div className="flex 2xl:flex-row flex-col 2xl:gap-6 gap-4 relative">
          <div className="flex flex-col gap-4 flex-1">
            <span className="text-sm font-medium leading-4 text-[#A5A5A5]">
              {date}
            </span>

            <h1 className="2xl:text-[32px] text-lg font-black 2xl:leading-10 leading-6">
              {title}
            </h1>

            <div className="flex flex-col gap-6">
              <Image
                src={img}
                alt="newsSingle"
                height={448}
                priority
                className="2xl:block hidden rounded-lg h-[448px] w-full"
              />

              <Image
                src={img}
                alt="newsSingle"
                height={168}
                priority
                className="2xl:hidden block rounded-lg h-[168px] w-full"
              />

              <p
                className="2xl:text-base text-[13px] 2xl:leading-4 leading-5"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>

          <div className="2xl:w-[1px] w-full bg-[#DCDCDC] 2xl:min-h-full 2xl:h-auto h-[1px]">
            &nbsp;
          </div>

          <div className="flex flex-col gap-4 2xl:w-[360px] w-full">
            {filteredNewsAll.map(({ date, img, title, id }) => {
              const newUrl = translatorToEn(title);

              return (
                <Link
                  href={`/news/${newUrl}`}
                  key={id}
                  className="p-4 flex-col w-full rounded-lg bg-[#F4F4F4]"
                >
                  <span className="text-xs text-[#A5A5A5] leading-4">
                    {date}
                  </span>

                  <div className="flex gap-4 items-center mt-2">
                    <Image
                      src={img}
                      alt="news"
                      width={100}
                      height={56}
                      className="object-cover w-[100px] h-14 rounded-lg"
                    />

                    <h3 className="flex-1 text-sm font-extrabold leading-4">
                      {title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
