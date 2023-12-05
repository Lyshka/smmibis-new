import { delagothicone } from "@/assets/font";
import { useFormMail } from "@/hooks/useFormMail";
import { MainContext } from "@/context/MainContext";
import { useContext, createRef } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { TelInput } from "../Input/TelInput";
import { Recaptcha } from "../Input/Recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

export const PopupFeedbackForm = () => {
  const { toggleFeedBack } = useContext(MainContext);

  const ref = createRef<ReCAPTCHA>();

  const handleA = async () => {
    // toggleFeedBack();
  };

  const { form, sendEmail } = useFormMail({
    template: "template_luykcfl",
    toggle: handleA,
  });

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="p-6 flex flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-2">
        <h6 className={`${delagothicone.className} text-lg leading-6`}>
          Форма обратной связи
        </h6>

        <p className="text-sm leading-4">
          Отставьте заявки и мы Вам перезвоним!
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input placeholder="Имя" name="name" />
          <TelInput />
          <Input placeholder="Email" type="email" name="email" />
          <Recaptcha recaptchaRef={ref} />
        </div>

        <Button className="uppercase">Отправить</Button>
      </div>
    </form>
  );
};
