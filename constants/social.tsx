import { TelegramIcon } from "@/assets/img/TelegramIcon";
import { FaInstagram, FaBehance, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const social = [
  {
    id: 1,
    icon: <FaInstagram className="group-hover:fill-main" />,
    url: "https://www.instagram.com/ibis.marketing/",
  },
  {
    id: 2,
    icon: <FaBehance className="group-hover:fill-main" />,
    url: "https://www.behance.net/smmibis",
  },
  {
    id: 3,
    icon: <FaLinkedinIn className="group-hover:fill-main" />,
    url: "https://www.linkedin.com/company/ibis-digital-marketing-agency/",
  },
  {
    id: 4,
    icon: <TelegramIcon className="group-hover:fill-main" />,
    url: "https://t.me/Ibis_marketing",
  },
  {
    id: 5,
    icon: <FaWhatsapp className="group-hover:fill-main" />,
    url: "https://wa.me/375339157676",
  },
];
