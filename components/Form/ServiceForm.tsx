import { FormHTMLAttributes } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input";

type ServiceFormType = {} & FormHTMLAttributes<HTMLFormElement>;

export const ServiceForm = ({ ...props }: ServiceFormType) => {
  return (
    <form {...props} className="flex 2xl:flex-row flex-col items-center gap-6 w-full">
      <Input className="2xl:min-w-[307px] min-w-full" placeholder="Имя *" required />
      <Input className="2xl:min-w-[307px] min-w-full" placeholder="Email *" required />
      <Button className="uppercase 2xl:leading-4 2xl:w-auto w-full">получить КП</Button>
    </form>
  );
};
