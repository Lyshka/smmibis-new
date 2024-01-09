import { Contacts } from "@/components/Contacts";
import { NewsAbout } from "@/components/News/NewsAbout";
import { ServiceFormBlock } from "@/components/ServiceFormBlock";
import { NewsPage } from "@/widgets/NewsPage";

interface INewsSingle {
  params: {
    idNews: string;
  };
}

const NewsSingle = ({ params }: INewsSingle) => {
  const idNews:string  = params?.idNews;

  return (
    <>
      <NewsAbout />
      <NewsPage idNews={idNews} />
      <ServiceFormBlock />
      <Contacts />
    </>
  );
};
export default NewsSingle;
