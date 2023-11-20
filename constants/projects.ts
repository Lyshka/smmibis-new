import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "@/assets/img";

export enum Categories {
  all = "All",
  smm = "SMM",
  sites = "Сайты",
}

interface IprojectsCategories {
  id: number;
  title: Categories;
}

export const projectsCategories: IprojectsCategories[] = [
  {
    id: 1,
    title: Categories.all,
  },
  {
    id: 2,
    title: Categories.smm,
  },
  {
    id: 3,
    title: Categories.sites,
  },
];

export const projects = [
  {
    id: 1,
    img: project1,
    category: Categories.sites,
  },
  {
    id: 2,
    img: project2,
    category: Categories.sites,
  },
  {
    id: 3,
    img: project3,
    category: Categories.sites,
  },
  {
    id: 4,
    img: project4,
    category: Categories.smm,
  },
  {
    id: 5,
    img: project5,
    category: Categories.smm,
  },
  {
    id: 6,
    img: project6,
    category: Categories.smm,
  },
  {
    id: 7,
    img: project1,
    category: Categories.sites,
  },
  {
    id: 8,
    img: project2,
    category: Categories.sites,
  },
  {
    id: 9,
    img: project3,
    category: Categories.sites,
  },
  {
    id: 10,
    img: project4,
    category: Categories.smm,
  },
  {
    id: 11,
    img: project5,
    category: Categories.smm,
  },
  {
    id: 12,
    img: project6,
    category: Categories.smm,
  },
];
