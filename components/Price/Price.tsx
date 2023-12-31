import { priceList } from "@/constants/price";
import { Title } from "../Title/Title";
import { CardPrice } from "./CardPrice";

export const Price = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-[100px] py-6 flex flex-col 2xl:gap-10 gap-6 items-start">
        <Title text="Услуги" />

        <div className="border-t border-[#BBBBBB] w-full">
          {priceList.map((price) => (
            <CardPrice key={price.id} price={price} />
          ))}
        </div>
      </div>
    </section>
  );
};
