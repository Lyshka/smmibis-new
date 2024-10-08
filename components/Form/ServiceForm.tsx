"use client";

import { FormHTMLAttributes } from "react";

import { useFormMail } from "@/hooks/useFormMail";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Recaptcha } from "../Input/Recaptcha";

type ServiceFormType = {} & FormHTMLAttributes<HTMLFormElement>;

export const ServiceForm = ({ ...props }: ServiceFormType) => {
  const { form, sendEmail, captcha } = useFormMail({
    template: "template_12l9xwb",
  });

  return (
    <>
      <form
        name="serviceForm"
        ref={form}
        onSubmit={sendEmail}
        {...props}
        className="grid 2xl:grid-cols-4 grid-cols-1 items-center gap-[30px] w-full"
      >
        <Input
          className="2xl:min-w-[307px] min-w-full"
          placeholder="Имя *"
          name="name"
          required
        />

        <Input
          className="2xl:min-w-[307px] min-w-full"
          placeholder="+375"
          type="tel"
          name="tel"
          required
        />

        <Input
          className="2xl:min-w-[307px] min-w-full"
          placeholder="Сайт: www.site.by"
          type="url"
          name="url"
        />

        <Button className="uppercase 2xl:leading-4 2xl:w-auto xl:max-w-[307px] w-full">
          заказать
        </Button>
      </form>
      <Recaptcha recaptchaRef={captcha} />
    </>
  );
};
