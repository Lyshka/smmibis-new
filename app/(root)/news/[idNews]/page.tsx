import { news } from "@/constants/news";
import NewsSingle from "@/pages/NewsSingle";
import { translatorToEn } from "@/utils/translator";

export function generateStaticParams() {
  return news.map(({ title }) => {
    const newUrl = translatorToEn(title);
    
    return {
      idNews: newUrl,
    };
  });
}

export default NewsSingle;
