import { NewsAbout } from "@/components/News/NewsAbout";
import { Contacts } from "@/components/Contacts";
import { ListNews } from "@/components/News/ListNews";

const News = () => {
  return (
    <>
      <NewsAbout />

      <ListNews />

      <Contacts dark={false} />
    </>
  );
};
export default News;
