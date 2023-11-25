import { siteCreation } from "@/assets/img";
import { ComputerCreationAdnetage } from "@/assets/img/ComputerSiteCreationAdnetage";
import { PaintsCreationAdnetage } from "@/assets/img/PaintsSiteCreationAdnetage";
import { MedalSiteCreationAdnetage } from "@/assets/img/MedalSiteCreationAdnetage";

export const services = [
  {
    id: 1,
    url: "site-creation",
    title: "Разработка сайта",
    img: siteCreation,
    advantages: {
      title: "Преимущества наших сайтов",
      list: [
        {
          id: 1,
          title: "Узнаваемость бренда",
          description:
            "Учитываем ваши идеи и фирменный стиль организации. Увеличиваем количество клиентов, так же повышаем узнаваемость бренда",
          imgAdvantage: <MedalSiteCreationAdnetage className="w-8 h-8" />,
        },
        {
          id: 2,
          title: "Понятный интерфейс",
          description:
            "Благодаря нашему креативному отделу мы доносим до клиента главные преимущества продукта или услуги",
          imgAdvantage: <PaintsCreationAdnetage className="w-8 h-8" />,
        },
        {
          id: 3,
          title: "Надежный сервис",
          description:
            "Наш отдел разработки обеспечит стабильную и беспрерывную работу вашего сервиса или сайта",
          imgAdvantage: <ComputerCreationAdnetage className="w-8 h-8" />,
        },
      ],
    },
    cards: [
      {
        id: 1,
        title: "Разработка сайтов",
        valuableBYN: "400",
        valuableRUB: "15000",
        month: false,
        description:
          "3 месяца фикс 700 BYN; с 4-ого месяца фикс 500 BYN + бонусы за запросы, которые в ТОП-10",
        includeServices: [
          {
            id: 1,
            title: "Лэндинг до 4 экранов",
          },
          {
            id: 2,
            title: "Со стандартным дизайном",
          },
          {
            id: 3,
            title: "без CMS",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "размещение на хостинге",
          },
        ],
      },
      {
        id: 2,
        title: "Разработка сайтов",
        valuableBYN: "800",
        valuableRUB: "25000",
        month: false,
        description:
          "3 месяца фикс 700 BYN; с 4-ого месяца фикс 500 BYN + бонусы за запросы, которые в ТОП-10",
        includeServices: [
          {
            id: 1,
            title: "Лэндинг до 7 экранов",
          },
          {
            id: 2,
            title: "С уникальным дизайном",
          },
          {
            id: 3,
            title: "простой CMS (WP либо др)",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "размещение на хостинге обратная связь",
          },
          {
            id: 6,
            title: "интерактивный помощник",
          },
        ],
      },
      {
        id: 3,
        title: "Разработка сайтов",
        valuableBYN: "1500",
        valuableRUB: "45000",
        month: false,
        includeServices: [
          {
            id: 1,
            title: "Корпоративный сайт до 7 страниц",
          },
          {
            id: 2,
            title: "С уникальным дизайном",
          },
          {
            id: 3,
            title: "CMS (WP либо др)",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "интерактивный помощник",
          },
        ],
      },
      {
        id: 4,
        title: "Разработка сайтов",
        valuableBYN: "2500",
        valuableRUB: "90000",
        month: false,
        includeServices: [
          {
            id: 1,
            title: "Интернет магазин до 15 страниц",
          },
          {
            id: 2,
            title: "С уникальным дизайном",
          },
          {
            id: 3,
            title: "CMS (WP либо др)",
          },
          {
            id: 4,
            title: "помощь в регистрации домена",
          },
          {
            id: 5,
            title: "размещение на хостинге обратная связь",
          },
          {
            id: 6,
            title: "интерактивный помощник",
          },
        ],
      },
    ],
  },
];
