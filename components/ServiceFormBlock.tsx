import { delagothicone } from "@/assets/font";
import { backgroundServidesMail } from "@/assets/img";
import Image from "next/image";
import { ServiceForm } from "./Form/ServiceForm";

export const ServiceFormBlock = () => {
  return (
    <section
      id="formService"
      className="relative w-full 2xl:h-[264px] overflow-hidden h-full flex justify-center items-center"
    >
      <div className="absolute h-full w-full">
        <Image
          src={backgroundServidesMail}
          alt="ServidesMail"
          className="w-full h-full object-cover 2xl:hidden block"
        />
        <Image
          src={backgroundServidesMail}
          alt="ServidesMail"
          height={264}
          className="w-full object-cover 2xl:block hidden"
        />
        <div className="h-full bg-black/50 z-10 w-full absolute top-0">
          &nbsp;
        </div>
      </div>

      <div className="flex flex-col items-center 2xl:gap-12 gap-5 relative z-20 pt-[52px] pb-10 px-4">
        <p
          className={`${delagothicone.className} text-white text-center text-[22px] leading-8`}
        >
          Заполните форму и мы Вам поможем
        </p>

        <ServiceForm />
      </div>
    </section>
  );
};
