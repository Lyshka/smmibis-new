import Image, { StaticImageData } from "next/image";
import { ServiceSubTitle } from "../Title/ServiceSubTitle";
import { Button } from "../Button/Button";
import Link from "next/link";

interface IServiceAbout {
  title: string;
  img: StaticImageData;
  alt: string;
}

export const ServiceAbout = ({ img, title, alt }: IServiceAbout) => {
  return (
    <section className="flex 2xl:flex-row flex-col-reverse 2xl:py-0 py-4 items-center 2xl:gap-6 gap-4 justify-between">
      <div className="flex flex-col 2xl:gap-8 gap-4">
        <div className="flex gap-2 flex-col">
          <ServiceSubTitle text={title} />

          <p className="text-base leading-6">
            Для получения индивидуального предложения, заполните форму ниже. Мы
            свяжемся с вами в ближайшее время.
          </p>
        </div>

        <div className="flex 2xl:justify-start justify-center items-center">
          <Link href={"#formService"}>
            <Button variant="outlined" className="font-medium">
              Получить КП
            </Button>
          </Link>
        </div>
      </div>

      <Image
        priority={true}
        src={img}
        alt={alt}
        height={288}
        width={488}
        className="2xl:block hidden rounded-2xl"
      />

      <Image
        priority={true}
        src={img}
        alt={alt}
        height={288}
        className="2xl:hidden block w-full rounded-2xl"
      />
    </section>
  );
};
