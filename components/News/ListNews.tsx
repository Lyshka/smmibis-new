import { news } from "@/constants/news";
import { CardNews } from "./CardNews";

export const ListNews = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-20 py-12 grid 2xl:grid-cols-3 grid-cols-1 2xl:gap-6 gap-12">
        {news.map((newsItem) => (
          <CardNews key={newsItem.id} news={newsItem} />
        ))}
      </div>
    </section>
  );
};
