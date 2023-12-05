import { FormHTMLAttributes, useContext } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useFormMail } from "@/hooks/useFormMail";
import { MainContext } from "@/context/MainContext";
import { TelInput } from "../Input/TelInput";
import { Recaptcha } from "../Input/Recaptcha";

type PopupMainFormType = {} & FormHTMLAttributes<HTMLFormElement>;

export const PopupMainForm = ({ ...props }: PopupMainFormType) => {
  const { toggleDiscount } = useContext(MainContext);

  const { form, sendEmail, captcha } = useFormMail({
    template: "template_luykcfl",
    toggle: toggleDiscount,
  });

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      {...props}
      className="flex flex-col flex-1 gap-6"
    >
      <div className="grid 2xl:grid-cols-2 grid-cols-1 2xl:gap-6 gap-4">
        <Input placeholder="Имя" name="name" />
        <TelInput />
        <Input
          placeholder="Email"
          type="email"
          className="2xl:col-span-2"
          name="email"
        />
        <Recaptcha recaptchaRef={captcha} />
      </div>

      <Button className="2xl:py-4 !py-2">Отправить</Button>
    </form>
  );
};
