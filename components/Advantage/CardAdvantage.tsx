import { AdvantageList } from "./Advantage";

interface ICardAdvantage {
  advantage: AdvantageList;
  img: JSX.Element;
}

export const CardAdvantage = ({ advantage, img }: ICardAdvantage) => {
  const { description, title } = advantage;

  return (
    <div className="flex py-6 px-[33px] flex-col justify-start items-center flex-1 rounded-2xl border border-[#BBB]">
      <div className="flex flex-col items-center gap-4">
        {img}

        <div className="flex flex-col items-center gap-2">
          <h4 className="text-center text-lg font-bold leading-6">{title}</h4>
          <p className="2xl:w-[251px] w-full 2xl:px-0 px-4 text-center text-sm leading-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
