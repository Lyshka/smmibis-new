import { priceList } from "@/constants/price";
import { Title } from "../Title/Title";
import { CardPrice } from "./CardPrice";

export const Price = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container flex flex-col 2xl:gap-10 gap-6 items-center">
        <Title text="Наши услуги" />

        <ul className="w-[420px]">
          <CardPrice
            cardPrice={{
              title: "Разработка сайта",
              backUrl: "test.webp",
              desc: "Для получения индивидуального предложения, заполните форму ниже. Мы свяжемся с вами в ближайшее время",
              link: "/",
            }}
          />
        </ul>
      </div>
    </section>
  );
};
