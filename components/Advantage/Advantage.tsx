import { MedalSiteCreationAdnetage } from "@/assets/img/MedalSiteCreationAdnetage";
import { ServiceSubTitle } from "../Title/ServiceSubTitle";
import { CardAdvantage } from "./CardAdvantage";
import { PaintsCreationAdnetage } from "@/assets/img/PaintsSiteCreationAdnetage";
import { ComputerCreationAdnetage } from "@/assets/img/ComputerSiteCreationAdnetage";

export type AdvantageList = {
  title: string;
  description: string;
  id: number;
};

interface IAdvantage {
  advantages: {
    title: string;
    list: AdvantageList[];
  };
}

const imgAdvantage = [
  {
    id: 1,
    icon: <MedalSiteCreationAdnetage className="w-16 h-16" />,
  },
  {
    id: 2,
    icon: <PaintsCreationAdnetage className="w-16 h-16" />,
  },
  {
    id: 3,
    icon: <ComputerCreationAdnetage className="w-16 h-16" />,
  },
];

export const Advantage = ({ advantages }: IAdvantage) => {
  const { list, title } = advantages;

  return (
    <section className="flex flex-col gap-6 2xl:py-0 py-12">
      <div className="flex justify-center items-center">
        <ServiceSubTitle text={title} />
      </div>

      <div className="grid 2xl:grid-cols-3 grid-cols-1 gap-6">
        {list.map((advantage, idx) => (
          <CardAdvantage key={advantage.id} advantage={advantage} img={imgAdvantage[idx].icon} />
        ))}
      </div>
    </section>
  );
};
