import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ICardPrice {
  cardPrice: {
    title: string;
    desc: string;
    backUrl: string;
    link: string;
  };
}

export const CardPrice = ({ cardPrice }: ICardPrice) => {
  const { backUrl, desc, link, title } = cardPrice;

  return (
    <li>
      <Link className="block h-[542px]" href={link}>
        <Image src={backUrl} width={420} height={542} alt="Услуги" />
      </Link>
    </li>
  );
};
