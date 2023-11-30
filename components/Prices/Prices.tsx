import { ServiceSubTitle } from "../Title/ServiceSubTitle";
import { PriceCard } from "./PriceCard";

export type priceList = {
  id: number;
  valuableBYN: string;
  valuableRUB?: string;
  month: boolean;
  description?: string;
  includeServices: {
    id: number;
    title: string;
  }[];
};

interface IPrices {
  pricesCards: priceList[];
  title: string;
}

export const Prices = ({ pricesCards, title }: IPrices) => {
  const pricesCardsL:priceList[] = pricesCards || [];
  return (
    <section className="flex flex-col gap-6 2xl:py-0 py-12">
      <ServiceSubTitle text="Наши цены" />

      <div className="2xl:grid flex grid-cols-2 gap-6 items-start 2xl:overflow-x-auto overflow-x-scroll">
        {pricesCardsL.map((priceCard) => (
          <PriceCard key={priceCard.id} priceCard={priceCard} title={title} />
        ))}
      </div>
    </section>
  );
};
