import { MainContext } from "@/context/MainContext";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent, useContext } from "react";

interface IuseFormMail {
  template: string;
  toggle?: () => void;
}

export const useFormMail = ({ template, toggle }: IuseFormMail) => {
  const form = useRef<HTMLFormElement>(null);
  const { toggleGratitude, isOpenGratitude } = useContext(MainContext);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // test
    toggleGratitude(true);
    form.current?.reset();
    if (toggle) {
      toggle();
    }

    setTimeout(() => {
      toggleGratitude(false);
    }, 5000);

    // emailjs
    //   .sendForm("service_qyeuhmr", template, form.current, "dcOlQT0d4xOkMtoc_")
    //   .then(
    //     () => {
    //       toggleGratitude(true);
    //       form.current?.reset();
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   )
    //   .finally(() => {
    //     if (toggle) {
    //       toggle();
    //     }

    //     setTimeout(() => {
    //       toggleGratitude(false);
    //     }, 5000);
    //   });
  };

  return { form, sendEmail };
};
