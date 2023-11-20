import { StarsPeople } from "@/assets/img/StarsPeople";
import { BrainPeople } from "@/assets/img/BrainPeople";
import { RatingUp } from "@/assets/img/RatingUp";

export const aboutList = [
  {
    id: 1,
    title: "Индивидуальный подход",
    description: "Подходим индивидуально к каждой нише и бизнесу",
    img: <BrainPeople className="2xl:w-20 w-[53.333px] 2xl:h-20 h-[53.333px] fill-main"/>,
  },
  {
    id: 2,
    title: "Мощная стратегия",
    description: "Анализируем вашу нишу и создаем мощную стратегию для продвижения",
    img: <RatingUp className="2xl:w-20 w-[53.333px] 2xl:h-20 h-[53.333px] fill-main"/>,
  },
  {
    id: 3,
    title: "Опытные специалисты",
    description: "Наши сотрудники первоклассные эксперты в своих нишах",
    img: <StarsPeople className="2xl:w-20 w-[53.333px] 2xl:h-20 h-[53.333px] fill-main"/>,
  },
];
