import { FormHTMLAttributes } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input";
import { useFormMail } from "@/hooks/useFormMail";

type PopupMainFormType = {} & FormHTMLAttributes<HTMLFormElement>;

export const PopupMainForm = ({ ...props }: PopupMainFormType) => {
  const { form, sendEmail } = useFormMail({
    template: "template_luykcfl",
  });

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      {...props}
      className="flex flex-col flex-1 gap-6"
    >
      <div className="grid 2xl:grid-cols-2 grid-cols-1 2xl:gap-6 gap-4">
        <Input placeholder="Имя" name="name"/>
        <Input placeholder="Телефон" name="tel"/>
        <Input placeholder="Email" className="2xl:col-span-2" name="email"/>
      </div>

      <Button className="2xl:py-4 !py-2">Отправить</Button>
    </form>
  );
};
