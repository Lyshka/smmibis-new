import Image from "next/image";
import { RiPhoneFill } from "react-icons/ri";

import { contact } from "@/assets/img";
import { Title } from "./Title/Title";
import Link from "next/link";
import { MailIcon } from "@/assets/img/MailIcon";
import { LocationIcon } from "@/assets/img/LocationIcon";
import clsx from "clsx";

interface IContacts {
  dark?: boolean;
}

export const Contacts = ({ dark = true }: IContacts) => {
  return (
    <section
      id="contacts"
      className={clsx(
        "flex justify-center items-center w-full",
        dark ? "bg-[#171717] text-white" : "bg-white text-[#333]"
      )}
    >
      <div className="container flex 2xl:flex-row flex-col-reverse gap-6 2xl:py-[104px] pt-10 2xl:items-center items-start">
        <div className="flex flex-col 2xl:justify-between justify-center 2xl:gap-10 gap-8 2xl:h-[360px] h-full">
          <Title text="Контакты" />

          <div className="flex flex-col 2xl:gap-4 gap-2 2xl:w-[527px] w-full">
            <h6 className="2xl:text-[22px] text-base font-medium leading-6">
              Давайте создадим что-то прекрасное вместе!
            </h6>

            <p className="2xl:text-base text-xs 2xl:leading-6 leading-4">
              Свяжитесь с нами и получите бесплатную консультацию вашего бизнеса
              прямо сейчас
            </p>
          </div>

          <div className="grid 2xl:grid-cols-3 grid-rows-2 2xl:gap-0 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RiPhoneFill className="2xl:w-6 w-4 2xl:h-6 h-4" />

                <span className="flex-1 2xl:text-base text-sm font-medium 2xl:leading-6 left-4">
                  Телефон:
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                <li className="2xl:text-sm text-xs 2xl:leading-6 leading-4">
                  <Link href={"tel:+375296308999"}>+375 (29) 630-89-99</Link>
                </li>
                <li className="2xl:text-sm text-xs 2xl:leading-6 leading-4">
                  <Link href={"tel:+375298538872"}>+375 (29) 853-88-72</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MailIcon className="2xl:w-6 w-4 2xl:h-6 h-4" />

                <span className="flex-1 2xl:text-base text-sm font-medium 2xl:leading-6 left-4">
                  E-mail:
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                <li className="2xl:text-sm text-xs 2xl:leading-6 leading-4">
                  <Link href={"mailto:mail@smm-ibis.by"}>mail@smm-ibis.by</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 2xl:col-auto col-span-3">
              <div className="flex items-center gap-2">
                <LocationIcon className="2xl:w-6 w-4 2xl:h-6 h-4" />

                <span className="flex-1 2xl:text-base text-sm font-medium 2xl:leading-6 left-4">
                  Адрес:
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                <li className="2xl:text-sm text-xs 2xl:leading-6 leading-4">
                  <Link
                    href={
                      "https://yandex.by/maps/158/mogilev/house/Z0kYdQRjQUIHQFtpfXR4dHhgYQ==/?ll=30.333870%2C53.895435&z=17"
                    }
                  >
                    г.Могилев, ул. Ленинская 11
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Image
          src={contact}
          alt="контакты Ибис маркетинг"
          width={638}
          height={360}
          className="rounded-2xl 2xl:block hidden"
        />

        <Image
          src={contact}
          alt="контакты Ибис маркетинг"
          height={161}
          className="rounded-[14.445px] 2xl:hidden block w-full"
        />
      </div>
    </section>
  );
};
