import { news } from "@/constants/news";
import { CardNews } from "./CardNews";
import Link from "next/link";
import { translatorToEn } from "@/utils/translator";

export const ListNews = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-20 py-12 grid 2xl:grid-cols-3 grid-cols-1 2xl:gap-6 gap-12">
        {news.map((newsItem) => {
          const newUrlTranslate = translatorToEn(newsItem.title);

          return (
            <Link href={`/news/${newUrlTranslate}`} key={newsItem.id}>
              <CardNews news={newsItem} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
