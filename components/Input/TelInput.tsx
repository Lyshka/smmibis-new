import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ru from "react-phone-input-2/lang/ru.json";
import { useContext, useEffect } from "react";

import { MainContext } from "@/context/MainContext";
import { LabelError } from "./LabelError";

export const TelInput = () => {
  const { isErrorTel, toggleErrorTel } = useContext(MainContext);

  const handleChange = (value: string) => {
    toggleErrorTel({
      stateError: false,
      tel: value,
    });
  };

  return (
    <div>
      <PhoneInput
        country={"by"}
        onlyCountries={["by", "ru"]}
        localization={ru}
        countryCodeEditable={false}
        inputClass="input-tel"
        onChange={handleChange}
        inputProps={{
          name: "tel",
          required: true,
        }}
      />

      {isErrorTel.stateError && <LabelError />}
    </div>
  );
};
