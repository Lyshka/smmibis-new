import {
  banner1,
  banner1_mobile,
  banner2,
  banner2_mobile,
  banner3,
  banner3_mobile,
  banner4,
  banner4_mobile,
} from "@/assets/img";

export const slidesMain = [
  {
    id: 1,
    title: "Твой<br/>маркетинговый отдел",
    description:
      "Заполните заявку прямо сейчас и получите эксклюзивный пакет услуг со скидкой!",
    img: banner1,
    buttonText: "Заполнить форму",
    imgMobile: banner1_mobile,
    textPrice: `
    <p class="xl:text-[64px] text-[32px] xl:leading-[52.57px]">от <span class='line-through'>1999</span></p>
    <p class="xl:text-[64px] text-[24px] xl:leading-[87.61px] font-semibold"><span class="xl:text-[96px] text-[32px] xl:leading-[87.61px] font-bold">999</span> BYN/в месяц</p>
    `
  },
  {
    id: 2,
    title: "Нет клиентов?",
    description:
      "Заполните форму на сайте и получите бесплатный аудит от наших специалистов.",
    img: banner2,
    buttonText: "Заполнить форму",
    imgMobile: banner2_mobile,
    textPrice: `
    <p class="xl:text-[64px] text-[32px] xl:leading-[52.57px]">от <span class='line-through'>999</span></p>
    <p class="xl:text-[64px] text-[24px] xl:leading-[87.61px] font-semibold"><span class="xl:text-[96px] text-[32px] xl:leading-[87.61px] font-bold">699</span> BYN/в месяц</p>
  `
  },
  {
    id: 3,
    title: "Бизнес-старт",
    description:
      "Заполните форму на сайте и получите бесплатный аудит от наших специалистов.",
    img: banner3,
    buttonText: "Заполнить форму",
    imgMobile: banner3_mobile,
    textPrice: `
    <p class="xl:text-[64px] text-[32px] xl:leading-[52.57px]">от <span class='line-through'>2499</span></p>
    <p class="xl:text-[64px] text-[24px] xl:leading-[87.61px] font-semibold"><span class="xl:text-[96px] text-[32px] xl:leading-[87.61px] font-bold">1499</span> BYN/в месяц</p>
  `
  },
  {
    id: 4,
    title: "Бесплатный аудит сайта",
    description:
      "Заполните форму на сайте и получите бесплатный аудит от наших специалистов.",
    img: banner4,
    buttonText: "Заполнить форму",
    imgMobile: banner4_mobile,
  },
];
