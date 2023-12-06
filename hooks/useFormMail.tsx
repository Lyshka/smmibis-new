import { MainContext } from "@/context/MainContext";
import { checkLengthNumber } from "@/utils/checkNumber";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent, useContext, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface IuseFormMail {
  template: string;
  toggle?: () => void;
}

export const useFormMail = ({ template, toggle }: IuseFormMail) => {
  const form = useRef<HTMLFormElement>(null);
  const captcha = createRef<ReCAPTCHA>();
  const { toggleGratitude, toggleErrorTel, isErrorTel } =
    useContext(MainContext);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    if (!checkLengthNumber(isErrorTel.tel)) {
      toggleErrorTel({ stateError: true });
    }

    // test
    if (checkLengthNumber(isErrorTel.tel)) {
      await captcha.current?.executeAsync().then((res) => {
        toggleGratitude(true);
        form.current?.reset();
        if (toggle) {
          toggle();
        }
        setTimeout(() => {
          toggleGratitude(false);
        }, 5000);
      });

      toggleErrorTel({ stateError: false });
    }

    // emailjs
    //   .sendForm("service_qyeuhmr", template, form.current, "dcOlQT0d4xOkMtoc_")
    //   .then(
    //     async () => {
    //       await captcha.current?.executeAsync().then((res) => {
    //         toggleGratitude(true);
    //         form.current?.reset();
    //       });
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

  return { form, sendEmail, captcha };
};
