import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICardPrice {
  cardPrice: {
    id: number;
    title: string;
    img: StaticImageData;
    href: string;
  };
}

export const CardPrice = ({ cardPrice }: ICardPrice) => {
  const { href, img, title } = cardPrice;

  return (
    <Link
      className="block xl:h-[542px] h-[400px] select-none relative"
      href={`/services${href}`}
    >
      <Image
        className="xl:w-auto w-full xl:h-auto h-full absolute inset-0"
        src={img}
        width={420}
        height={542}
        alt="Услуги"
      />

      <div className="relative z-[1] h-full mx-auto max-w-[316.17px] w-full xl:pt-6 pt-5 xl:pb-6 pb-10 flex justify-between flex-col items-center">
        <div className="flex flex-col xl:gap-4 items-center gap-2.5 text-center">
          <span
            className={`py-[7px] xl:px-[15px] px-2.5 xl:text-base text-[13px] xl:leading-[23.33px] leading-[12px] text-[#606060] uppercase font-medium max-w-[162px] bg-white/50 xl:rounded-3xl rounded-[12px]`}
          >
            IBIS MARKETING
          </span>

          <h2 className="xl:text-[28px] text-base xl:leading-[32.67px] leading-[16.8px] text-[#252525] font-medium">
            {title}
          </h2>

          <p className="xl:text-lg text-[13px] xl:leading-[25.67px] leading-[16.43px] text-[#252525]">
            Для получения индивидуального предложения, заполните форму ниже. Мы
            свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="shadowPriceHomeSlideButton bg-white rounded-full xl:max-w-[240px] max-w-[130px] w-full xl:h-14 h-9 flex justify-center items-center xl:gap-3 gap-1.5 uppercase xl:text-xl text-sm xl:leading-7 leading-[14.4px] font-medium text-[#606060]">
          <span>Все услуги</span>

          <svg
            className="flex-shrink-0 xl:w-4 w-2.5 xl:h-4 h-2.5"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5642 14.0534C15.3943 14.0537 15.226 14.0205 15.0689 13.9556C14.9119 13.8907 14.7692 13.7954 14.6491 13.6753C14.529 13.5552 14.4337 13.4125 14.3688 13.2555C14.3039 13.0984 14.2707 12.9301 14.271 12.7602L14.271 4.92672L3.08894 16.1088C2.84685 16.3509 2.51849 16.4869 2.17612 16.4869C1.83374 16.4869 1.50539 16.3509 1.2633 16.1088C1.0212 15.8667 0.885196 15.5383 0.885197 15.196C0.885197 14.8536 1.0212 14.5252 1.2633 14.2831L12.4454 3.10108L4.61031 3.09955C4.26734 3.09955 3.93842 2.96331 3.6959 2.7208C3.45339 2.47828 3.31715 2.14936 3.31714 1.80639C3.31715 1.46342 3.45339 1.1345 3.6959 0.891987C3.93842 0.649472 4.26734 0.513228 4.61031 0.513229L15.5642 0.513229C15.7341 0.512934 15.9024 0.546181 16.0594 0.611064C16.2164 0.675947 16.3591 0.771189 16.4792 0.891329C16.5994 1.01147 16.6946 1.15414 16.7595 1.31117C16.8244 1.4682 16.8576 1.63649 16.8573 1.80639L16.8573 12.7602C16.8576 12.9301 16.8244 13.0984 16.7595 13.2555C16.6946 13.4125 16.5994 13.5552 16.4792 13.6753C16.3591 13.7954 16.2164 13.8907 16.0594 13.9556C15.9024 14.0205 15.7341 14.0537 15.5642 14.0534Z"
              fill="#606060"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};
