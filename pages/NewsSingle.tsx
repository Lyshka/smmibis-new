import { Contacts } from "@/components/Contacts";
import { NewsAbout } from "@/components/News/NewsAbout";
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
      <Contacts dark={false} />
    </>
  );
};
export default NewsSingle;
