import { ServiceAbout } from "@/components/About/ServiceAbout";
import { Advantage } from "@/components/Advantage/Advantage";
import { Prices } from "@/components/Prices/Prices";
import { Projects } from "@/components/Projects/Projects";
import { ServiceProject } from "@/components/Projects/ServiceProject";
import { ServiceTitle } from "@/components/Title/ServiceTitle";
import { services } from "@/constants/services";

interface IServicePage {
  idSevice: string;
}

export const ServicePage = ({ idSevice }: IServicePage) => {
  const service = services.filter(({ url }) => url === idSevice)[0];

  const { advantages, cards, img, title } = service;

  return (
    <div className="flex flex-col 2xl:gap-[104px] gap-0 2xl:p-10 py-0">
      <ServiceTitle title={title} />
      <ServiceAbout title={title} img={img} />
      <Advantage advantages={advantages} />
      <ServiceProject />
      <Prices pricesCards={cards} />
    </div>
  );
};