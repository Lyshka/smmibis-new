import { delagothicone } from "@/assets/font";
import { Button } from "../Button/Button";
import { Input } from "../Input";

export const PopupFeedbackForm = () => {
  return (
    <form className="p-6 flex flex-col justify-between">
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
          <Input placeholder="Имя" />
          <Input placeholder="Телефон" />
          <Input placeholder="Email" />
        </div>

        <Button className="uppercase">Отправить</Button>
      </div>
    </form>
  );
};
