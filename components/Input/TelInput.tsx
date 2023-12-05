import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ru from "react-phone-input-2/lang/ru.json";

export const TelInput = () => {
  return (
    <PhoneInput
      country={"by"}
      onlyCountries={["by", "ru"]}
      localization={ru}
      countryCodeEditable={false}
      inputClass="input-tel"
      inputProps={{
        name: "tel",
        required: true,
      }}
    />
  );
};
