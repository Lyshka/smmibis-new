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
        "2xl:py-4 py-2 px-6 rounded-[100px] text-lg",
        props.className,
        {
          primary: "bg-main text-white",
          secondary: "bg-white",
          outlined: "",
        }[variant]
      )}
    />
  );
};
