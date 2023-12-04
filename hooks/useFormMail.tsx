import { MainContext } from "@/context/MainContext";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent, useEffect, useContext } from "react";

interface IuseFormMail {
  template: string;
}

export const useFormMail = ({ template }: IuseFormMail) => {
  const form = useRef<HTMLFormElement>(null);
  const { toggleGratitude, isOpenGratitude } = useContext(MainContext);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_qyeuhmr", template, form.current, "dcOlQT0d4xOkMtoc_")
      .then(
        () => {
          toggleGratitude(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error);
        }
      );
  };

  useEffect(() => {
    const id = setTimeout(() => {
      toggleGratitude(false);
    }, 5000);

    return () => clearTimeout(id);
  }, [toggleGratitude, isOpenGratitude]);

  return { form, sendEmail };
};
