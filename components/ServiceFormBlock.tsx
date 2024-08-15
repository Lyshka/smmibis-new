import { delagothicone } from "@/assets/font";
import { backgroundServidesMail } from "@/assets/img";
import Image from "next/image";
import { ServiceForm } from "./Form/ServiceForm";

export const ServiceFormBlock = () => {
  return (
    <section
      id="formService"
      className="relative w-full 2xl:h-[264px] overflow-hidden h-full flex justify-center items-center bg-[#DBD8FF]"
    >
      <div className="flex flex-col items-center 2xl:gap-12 gap-5 relative z-20 pt-[52px] pb-10 px-4">
        <p
          className={`${delagothicone.className} text-center text-[22px] leading-8`}
        >
          Начните с бесплатного аудита
        </p>

        <ServiceForm />
      </div>
    </section>
  );
};
