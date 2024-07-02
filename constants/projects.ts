import {
  project10_site,
  project11_site,
  project12_smm,
  project13_site,
  project14_smm,
  project15_smm,
  project16_site,
  project17_smm,
  project1_smm,
  project2_smm,
  project3_site,
  project4_site,
  project5_smm,
  project6_smm,
  project7_smm,
  project8_smm,
  project9_site,
  project18_smm,
  project19_site,
  project20_site,
  project21_site,
  project22_site,
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
    img: project10_site,
    category: Categories.sites,
  },
  {
    id: 2,
    img: project11_site,
    category: Categories.sites,
  },
  {
    id: 3,
    img: project12_smm,
    category: Categories.smm,
  },
  {
    id: 4,
    img: project13_site,
    category: Categories.sites,
  },
  {
    id: 5,
    img: project14_smm,
    category: Categories.smm,
  },
  {
    id: 6,
    img: project15_smm,
    category: Categories.smm,
  },
  {
    id: 7,
    img: project16_site,
    category: Categories.sites,
  },
  {
    id: 8,
    img: project17_smm,
    category: Categories.smm,
  },
  {
    id: 9,
    img: project1_smm,
    category: Categories.smm,
  },
  {
    id: 10,
    img: project2_smm,
    category: Categories.smm,
  },
  {
    id: 11,
    img: project3_site,
    category: Categories.sites,
  },
  {
    id: 12,
    img: project4_site,
    category: Categories.sites,
  },
  {
    id: 13,
    img: project5_smm,
    category: Categories.smm,
  },
  {
    id: 14,
    img: project6_smm,
    category: Categories.smm,
  },
  {
    id: 15,
    img: project7_smm,
    category: Categories.smm,
  },
  {
    id: 16,
    img: project8_smm,
    category: Categories.smm,
  },
  {
    id: 17,
    img: project9_site,
    category: Categories.sites,
  },
  {
    id: 18,
    img: project18_smm,
    category: Categories.smm,
  },
  {
    id: 19,
    img: project19_site,
    category: Categories.sites,
  },
  {
    id: 20,
    img: project20_site,
    category: Categories.sites,
  },
  {
    id: 21,
    img: project21_site,
    category: Categories.sites,
  },
  {
    id: 22,
    img: project22_site,
    category: Categories.sites,
  },
];
