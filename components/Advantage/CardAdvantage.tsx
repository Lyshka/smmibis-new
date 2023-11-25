import { AdvantageList } from "./Advantage";

interface ICardAdvantage {
  advantage: AdvantageList;
}

export const CardAdvantage = ({ advantage }: ICardAdvantage) => {
  const { description, imgAdvantage, title } = advantage;

  return (
    <div className="flex h-56 py-6 flex-col justify-center items-center flex-1 rounded-2xl border border-[#BBB]">
      <div className="flex h-[176px] flex-col items-center gap-4">
        {imgAdvantage}

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
