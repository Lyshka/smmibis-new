import { delagothicone } from "@/assets/font";
import { aboutList } from "@/constants/about";

export const About = () => {
  return (
    <section id="about" className="flex justify-center items-center">
      <div className="container 2xl:pt-[104px] pt-10 flex flex-col xl:gap-[50px] gap-4">
        <div className="w-full flex flex-col lg:gap-[60px] gap-4 xl:items-start items-center">
          <h1
            className={`2xl:text-5xl text-lg 2xl:leading-[56px] leading-6 2xl:text-left text-center ${delagothicone.className}`}
          >
            Добро пожаловать
            <br />в мир маркетинга!
          </h1>

          <p className="2xl:text-2xl text-xs 2xl:leading-9 leading-4 2xl:max-w-[1063px] w-full">
            Готовы поднять свой бизнес на новый уровень? Наша команда экспертов
            предлагает эффективные решения по продвижению как в Интернете и
            социальных сетях, так и в офлайне. Мы поможем вам развивать свой
            бизнес и привлекать больше клиентов с помощью наших первоклассных
            маркетинговых стратегий. Не упустите возможность поднять свой бизнес
            на новую высоту.
          </p>
        </div>

        <ul className="grid xl:grid-cols-3 grid-cols-2 xl:gap-[31px] gap-2.5 w-full">
          {aboutList.map(({ description, id, title }, idx) => (
            <li key={id} className="xl:last:col-span-1 last:col-span-2">
              <div
                className={`xl:space-y-3.5 space-y-1 text-black xl:px-10 px-3.5 xl:py-[50px] py-4 bg-[#F0F0F0] xl:rounded-[10px] rounded-[4px] ${
                  idx === 2 ? "xl:w-full w-fit mx-auto" : ""
                }`}
              >
                <span className="font-medium xl:text-[58px] text-2xl xl:leading-[58px] leading-[19.48px]">
                  {title}
                </span>

                <p className="xl:text-lg text-xs xl:leading-[26px] leading-[8.73px]">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
