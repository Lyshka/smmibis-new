import { services } from "./services";

export const mainMenu = [
  {
    id: 1,
    title: "Главная",
    url: "/",
  },
  {
    id: 2,
    title: "О нас",
    url: "/#about",
  },
  {
    id: 3,
    title: "Портфолио",
    url: "/#portfolio",
  },
  {
    id: 4,
    title: "Услуги и цены",
    url: `services/${services[0].url}`,
    addition: [
      {
        id: 1,
        title: "Разработка сайта",
        url: "site-creation",
      },
      {
        id: 2,
        title: "Обслуживание сайта",
        url: "website-maintenance",
      },
      {
        id: 3,
        title: "Контекстная реклама",
        url: "contextual-advertising",
      },
      {
        id: 4,
        title: "SEO продвижение",
        url: "seo-promotion",
      },
      {
        id: 5,
        title: "SMM продвижение",
        url: "smm-promotion",
      },
      {
        id: 6,
        title: "Таргетированная реклама",
        url: "targeted-advertising",
      },
      {
        id: 7,
        title: "TikTok продвижение",
        url: "tiktok-promotion",
      },
      {
        id: 8,
        title: "Продвижение на маркетплейсах",
        url: "promotion-on-marketplaces",
      },
      {
        id: 9,
        title: "Разработка уникального дизайна",
        url: "development-of-a-unique-design",
      },
      {
        id: 10,
        title: "Наружная реклама",
        url: "outdoor-advertising",
      },
      {
        id: 11,
        title: "Booking service",
        url: "booking-service",
      },
      {
        id: 12,
        title: "Видео продакшн",
        url: "video-production",
      },
      {
        id: 13,
        title: "Прочие услуги",
        url: "other-services",
      },
      {
        id: 15,
        title: "Функциональный отдел маркетинга",
        url: "functional-marketing-department",
      },
    ],
  },
  {
    id: 5,
    title: "Новости",
    url: "news",
  },
  {
    id: 6,
    title: "Контакты",
    url: "/#contacts",
  },
];

export const footerMenuJobs = [
  {
    id: 1,
    title: "SMM | Разработка сайтов | SEO",
  },
  {
    id: 2,
    title: "Таргет и контекстная реклама",
  },
  {
    id: 3,
    title: "Дизайн | Создание контента",
  },
];
