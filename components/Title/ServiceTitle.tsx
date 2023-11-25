import { delagothicone } from "@/assets/font";

interface IServiceTitle {
  title: string;
}

export const ServiceTitle = ({ title }: IServiceTitle) => {
  return (
    <section className="flex 2xl:py-0 py-8 flex-col items-center gap-4 self-center">
      <p className="text-[#A7A7A7] text-sm text-center leading-4 uppercase">
        Наше предложение
      </p>
      <div className="flex flex-col items-center gap-[15px]">
        <h1
          className={`text-center text-[22px] leading-8 ${delagothicone.className}`}
        >
          {title}
        </h1>

        <div className="w-[100px] h-[1px] bg-main">&nbsp;</div>
      </div>
    </section>
  );
};
