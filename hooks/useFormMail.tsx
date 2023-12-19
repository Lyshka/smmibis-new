import { MainContext } from "@/context/MainContext";
import { checkLengthNumber } from "@/utils/checkNumber";
import emailjs from "@emailjs/browser";
import axios from "axios";
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

    const formNameService =
      form.current.attributes.getNamedItem("name")?.nodeValue;
    const name: any = form.current?.elements.namedItem("name");
    const email: any = form.current?.elements.namedItem("email");
    const tel: any = form.current?.elements.namedItem("tel");

    // test
    //     if (
    //       formNameService === "serviceForm" ||
    //       checkLengthNumber(isErrorTel.tel)
    //     ) {
    //       await captcha.current?.executeAsync().then(async (res) => {
    //         toggleGratitude(true);

    //         if (tel) {
    //           axios.post(
    //             "https://api.telegram.org/bot6597877649:AAEfIM7h9IYg7m688vgZ_WcCnb7R2QdguMg/sendMessage",
    //             {
    //               chat_id: -4054386788,
    //               text: `<b>Клиент: </b>${name.value}
    // <b>Email: </b>${email.value}
    // <b>Телефон: </b> ${tel.value}
    //                 `,
    //               parse_mode: "html",
    //             }
    //           );
    //         } else {
    //           axios.post(
    //             "https://api.telegram.org/bot6597877649:AAEfIM7h9IYg7m688vgZ_WcCnb7R2QdguMg/sendMessage",
    //             {
    //               chat_id: -4054386788,
    //               text: `<b>Клиент: </b>${name.value}
    // <b>Email: </b>${email.value}`,
    //               parse_mode: "html",
    //             }
    //           );
    //         }

    //         form.current?.reset();

    //         if (toggle) {
    //           toggle();
    //         }
    //         setTimeout(() => {
    //           toggleGratitude(false);
    //         }, 5000);
    //       });

    //       toggleErrorTel({ stateError: false });
    //     }

    if (
      formNameService === "serviceForm" ||
      checkLengthNumber(isErrorTel.tel)
    ) {
      emailjs
        .sendForm(
          "service_qyeuhmr",
          template,
          form.current,
          "dcOlQT0d4xOkMtoc_"
        )
        .then(
          async () => {
            captcha.current?.execute();
            toggleGratitude(true);

            if (tel) {
              axios.post(
                "https://api.telegram.org/bot6597877649:AAEfIM7h9IYg7m688vgZ_WcCnb7R2QdguMg/sendMessage",
                {
                  chat_id: -4054386788,
                  text: `<b>Клиент: </b>${name.value}
<b>Email: </b>${email.value}
<b>Телефон: </b> ${tel.value}
                            `,
                  parse_mode: "html",
                }
              );
            } else {
              axios.post(
                "https://api.telegram.org/bot6597877649:AAEfIM7h9IYg7m688vgZ_WcCnb7R2QdguMg/sendMessage",
                {
                  chat_id: -4054386788,
                  text: `<b>Клиент: </b>${name.value}
<b>Email: </b>${email.value}`,
                  parse_mode: "html",
                }
              );
            }

            form.current?.reset();

            toggleErrorTel({ stateError: false });
          },
          (error) => {
            console.error(error);
          }
        )
        .finally(() => {
          if (toggle) {
            toggle();
          }

          setTimeout(() => {
            toggleGratitude(false);
          }, 5000);
        });
    }
  };

  return { form, sendEmail, captcha };
};
