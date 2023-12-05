import ReCAPTCHA from "react-google-recaptcha";
import { RefObject } from "react";

interface IRecaptcha {
  recaptchaRef: RefObject<ReCAPTCHA>;
}

export const Recaptcha = ({ recaptchaRef }: IRecaptcha) => {
  return (
    <ReCAPTCHA
      size="invisible"
      ref={recaptchaRef}
      sitekey="6LeUhyYpAAAAAIr-5CqLpzF5k25cz4OTsDca-dtm"
      hl="RU"
    />
  );
};
