import { delagothicone } from "@/assets/font";
import { Title } from "./Title";
import { CommentsSlider } from "./Slider/CommentsSlider";

export const Comments = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-[104px] py-10 flex flex-col gap-8">
        <Title text="Отзывы наших клиентов" center />

        <span
          className={`${delagothicone.className} 2xl:text-[56px] text-2xl text-main 2xl:leading-[56px] leading-6 text-center`}
        >
          ”
        </span>

        <CommentsSlider />
      </div>
    </section>
  );
};
