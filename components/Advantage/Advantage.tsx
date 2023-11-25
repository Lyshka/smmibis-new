import { ServiceSubTitle } from "../Title/ServiceSubTitle";
import { CardAdvantage } from "./CardAdvantage";

export type AdvantageList = {
  title: string;
  description: string;
  imgAdvantage: JSX.Element;
  id: number;
};

interface IAdvantage {
  advantages: {
    title: string;
    list: AdvantageList[];
  };
}

export const Advantage = ({ advantages }: IAdvantage) => {
  const { list, title } = advantages;

  return (
    <section className="flex flex-col gap-6 2xl:py-0 py-12">
      <div className="flex justify-center items-center">
        <ServiceSubTitle text={title} />
      </div>

      <div className="grid 2xl:grid-cols-3 grid-cols-1 gap-6">
        {list.map((advantage) => (
          <CardAdvantage key={advantage.id} advantage={advantage} />
        ))}
      </div>
    </section>
  );
};
