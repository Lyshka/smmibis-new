import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type MainButtonVariant = "primary" | "secondary" | "outlined";
export type MainButtonProps = {
  variant?: MainButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = "primary", ...props }: MainButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "py-4 px-6 rounded-[100px] 2xl:text-lg text-sm",
        props.className,
        {
          primary: "bg-main text-white",
          secondary: "bg-white",
          outlined: "bg-white border-2 border-main",
        }[variant]
      )}
    />
  );
};
