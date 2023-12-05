import ReCAPTCHA from "react-google-recaptcha";
import { RefObject } from "react";

interface IRecaptcha {
  recaptchaRef: RefObject<ReCAPTCHA>;
}

export const Recaptcha = ({ recaptchaRef }: IRecaptcha) => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <ReCAPTCHA
      size="normal"
      ref={recaptchaRef}
      onChange={onChange}
      sitekey="6LeUhyYpAAAAAIr-5CqLpzF5k25cz4OTsDca-dtm"
      hl="RU"
    />
  );
};
