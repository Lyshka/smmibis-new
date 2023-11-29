import { MobileNewsSlider } from "../Slider/MobileNewsSlider";
import { NewsSlider } from "../Slider/NewsSlider";
import { Title } from "../Title/Title";

export const News = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-[88px] py-6 flex flex-col 2xl:gap-10 gap-6 items-start">
        <Title text="Статьи" />

        <NewsSlider />
        <MobileNewsSlider />
      </div>
    </section>
  );
};
