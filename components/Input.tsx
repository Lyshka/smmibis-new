import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type TypeInput = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: TypeInput) => {
  return (
    <input
      {...props}
      className={clsx(
        "2xl:px-6 px-4 flex-1 2xl:py-4 py-3 rounded-lg bg-[#F4F4F4] placeholder:text-[#A7A7A7] 2xl:text-sm text-xs leading-4",
        props.className
      )}
    />
  );
};
