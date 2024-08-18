"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";

const FormBlock = () => {
  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget;

    const nameValue = (target.elements.namedItem("name") as HTMLInputElement)
      .value;
    const telValue = (target.elements.namedItem("tel") as HTMLInputElement)
      .value;
    const emailValue = (target.elements.namedItem("email") as HTMLInputElement)
      .value;
    const companyValue = (
      target.elements.namedItem("company") as HTMLInputElement
    ).value;
    const searchValue = (
      target.elements.namedItem("search") as HTMLInputElement
    ).value;

    if (!nameValue) {
      toast.error("Имя является обязательным поле!");
      return;
    }

    if (!telValue) {
      toast.error("Телефон является обязательным поле!");
      return;
    }

    axios.post(
      "https://api.telegram.org/bot6597877649:AAEfIM7h9IYg7m688vgZ_WcCnb7R2QdguMg/sendMessage",
      {
        chat_id: -4054386788,
        text: `
<b>Имя: </b>${nameValue}
<b>Телефон: </b> ${telValue}
<b>Почта: </b> ${emailValue}
<b>Компания: </b> ${companyValue}
<b>Запрос: </b> ${searchValue}
`,
        parse_mode: "html",
      }
    );

    target.reset();

    toast.success("Мы скоро с вами свяжемся!");
  };

  return (
    <>
      <Toaster position="top-right" />

      <section className="2xl:py-32 py-10 bg-[#171717] 2xl:px-0 px-4">
        <div className="2xl:max-w-[1320px] w-full mx-auto bg-white 2xl:px-14 2xl:py-14 py-5 px-2.5 2xl:rounded-[22px] rounded-lg flex 2xl:gap-[122px] gap-5 2xl:flex-row flex-col">
          <div className="2xl:space-y-7 space-y-2.5 text-black">
            <h6 className="font-medium 2xl:text-[40px] text-xl 2xl:leading-[42px] leading-[21px]">
              Открываем новые горизонты для вашего бизнеса
            </h6>

            <p className="2xl:text-xl text-xs 2xl:leading-[24.49px] leading-[13px]">
              Возникли вопросы? Обращайтесь к нашим
              <br />
              экспертам - мы поможем найти решения
            </p>
          </div>

          <form
            onSubmit={handleSubmitForm}
            id="formHomeDownFooter"
            className="flex-shrink-0 2xl:max-w-[579px] w-full 2xl:space-y-7 space-y-3"
          >
            <div className="2xl:space-y-4 space-y-2">
              <div className="2xl:space-y-5 space-y-4">
                <input name="name" placeholder="Имя*" type="text" />

                <div className="grid 2xl:grid-cols-2 grid-cols-1 2xl:gap-5 gap-2">
                  <input name="tel" placeholder="Телефон*" type="tel" />
                  <input
                    name="email"
                    placeholder="Электронная почта"
                    type="email"
                  />
                </div>

                <input name="company" placeholder="Компания" type="text" />

                <input name="search" placeholder="Ваш запрос" type="text" />
              </div>

              <button
                className="2xl:text-2xl text-sm 2xl:leading-[22.26px] leading-[16px] text-white text-center flex justify-center items-center 2xl:max-w-[238px] w-full 2xl:h-[63px] h-10 bg-[#FF3A2D] 2xl:rounded-[15px] rounded-full"
                type="submit"
              >
                Оставить заявку
              </button>
            </div>

            <Link
              className="2xl:text-[13px] text-[9px] 2xl:leading-[18.2px] leading-[11px] font-light text-[#606060] underline block"
              href={"#"}
            >
              Нажимая на кнопку, я соглашаюсь с политикой конфиденциальности и
              условиями обработки персональных данных
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
export default FormBlock;
