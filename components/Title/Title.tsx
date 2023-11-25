import { delagothicone } from "@/assets/font";
import clsx from "clsx";

interface ITitle {
  text: string;
  center?: boolean;
}

export const Title = ({ text, center = false }: ITitle) => {
  return (
    <h2
      className={clsx(
        `${delagothicone.className} 2xl:text-[32px] text-lg 2xl:leading-10 leading-6`,
        center && "text-center",
      )}
    >
      {text}
    </h2>
  );
};
