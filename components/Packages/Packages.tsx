import { ServiceTitle } from "../Title/ServiceTitle";
import { CardBuisnes } from "./CardBuisnes";
import { CardMarket } from "./CardMarket";
import { CardNotClient } from "./CardNotClient";
import { Timer } from "./Timer";

export const Packages = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="xl:space-y-[75px] space-y-5 container flex flex-col">
        <ServiceTitle title="Пакеты" />

        <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-5 gap-3.5 w-full">
          <CardBuisnes />
          <CardNotClient />
          <CardMarket />
        </div>

        <Timer />
      </div>
    </section>
  );
};
