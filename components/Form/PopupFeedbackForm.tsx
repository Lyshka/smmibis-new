import { delagothicone } from "@/assets/font";
import { Button } from "../Button/Button";
import { Input } from "../Input";
import { useFormMail } from "@/hooks/useFormMail";

export const PopupFeedbackForm = () => {
  const { form, sendEmail } = useFormMail({
    template: "template_luykcfl",
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
          <Input placeholder="Телефон" name="tel" />
          <Input placeholder="Email" name="email" />
        </div>

        <Button className="uppercase">Отправить</Button>
      </div>
    </form>
  );
};
