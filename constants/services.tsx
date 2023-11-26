import {
  bookingService,
  contextualAdvertising,
  developmentOfAUniqueDesign,
  functionalMarketingDepartment,
  otherServices,
  outdoorAdvertising,
  promotionOnMarketplaces,
  seoPromotion,
  siteCreation,
  smmPromotion,
  targetedAdvertising,
  tiktokPromotion,
  videoProduction,
  websiteMaintenance,
} from "@/assets/img";
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
  {
    id: 2,
    url: "website-maintenance",
    title: "Обслуживание сайта",
    img: websiteMaintenance,
    advantages: {
      title: "Преимущества наших сайтов",
      list: [
        {
          id: 1,
          title: "Регулярные обновления и безопасность",
          description:
            "Мы обеспечиваем постоянное обновление вашего сайта, следим за его безопасностью и защищаем от угроз, что обеспечивает надежную и стабильную работу онлайн-платформы.",
          imgAdvantage: <MedalSiteCreationAdnetage className="w-8 h-8" />,
        },
        {
          id: 2,
          title: "Профессиональная поддержка и быстрое реагирование",
          description:
            "Наша команда технической поддержки всегда готова помочь и ответить на ваши вопросы. Мы гарантируем быстрое реагирование на любые запросы, что позволяет избежать простоев и проблем на сайте.",
          imgAdvantage: <PaintsCreationAdnetage className="w-8 h-8" />,
        },
        {
          id: 3,
          title: "Повышение производительности и оптимизация",
          description:
            "Мы оптимизируем ваш сайт для более эффективной работы, что повышает его производительность и ускоряет загрузку страниц. Это улучшает пользовательский опыт и способствует увеличению конверсии и доходов.",
          imgAdvantage: <ComputerCreationAdnetage className="w-8 h-8" />,
        },
      ],
    },
    cards: [
      {
        id: 1,
        valuableBYN: "400",
        valuableRUB: "15000",
        month: true,
        includeServices: [
          {
            id: 1,
            title: "Ежемесячное техническому сопровождению сайта",
          },
          {
            id: 2,
            title: "Устранение ошибок",
          },
          {
            id: 3,
            title: "Обновление контента",
          },
          {
            id: 4,
            title: "Подготовка контента",
          },
          {
            id: 6,
            title: "Наполнение сайта",
          },
          {
            id: 7,
            title: "Установка/ изменения плагинов, счетчиков",
          },
          {
            id: 8,
            title: "Написание и публикация новостей",
          },
          {
            id: 9,
            title: "Добавление новых страниц",
          },
          {
            id: 10,
            title: "До 30 часов выполнения работ работы в месяц",
          },
        ],
      },
      {
        id: 2,
        valuableBYN: "600",
        valuableRUB: "20000",
        month: true,
        includeServices: [
          {
            id: 1,
            title: "Ежемесячное техническому сопровождению сайта",
          },
          {
            id: 2,
            title: "Устранение ошибок",
          },
          {
            id: 3,
            title: "Обновление контента",
          },
          {
            id: 4,
            title: "Подготовка контента",
          },
          {
            id: 5,
            title: "Наполнение сайта",
          },
          {
            id: 6,
            title: "Установка/ изменения плагинов, счетчиков",
          },
          {
            id: 7,
            title: "Написание и публикация новостей",
          },
          {
            id: 8,
            title: "Добавление новых страниц",
          },
          {
            id: 9,
            title: "До 50 часов выполнения работ работы в месяц",
          },
        ],
      },
      {
        id: 3,
        valuableBYN: "18",
        valuableRUB: "500",
        month: false,
        includeServices: [
          {
            id: 1,
            title: "Разовые работы техническому сопровождению сайта",
          },
          {
            id: 2,
            title: "Устранение ошибок",
          },
          {
            id: 3,
            title: "Обновление контента",
          },
          {
            id: 4,
            title: "Подготовка контента",
          },
          {
            id: 5,
            title: "Наполнение сайта",
          },
          {
            id: 6,
            title: "Установка/ изменения плагинов, счетчиков",
          },
          {
            id: 7,
            title: "Написание и публикация новостей",
          },
          {
            id: 8,
            title: "Добавление новых страниц",
          },
          {
            id: 9,
            title: "За 1 час выполнения работ",
          },
        ],
      },
    ],
  },
];
