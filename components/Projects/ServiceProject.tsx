"use client";

import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Categories, projects } from "@/constants/projects";
import { Button } from "../Button/Button";
import { CardProject } from "./CardProject";
import { ServiceSubTitle } from "../Title/ServiceSubTitle";

interface IServiceProject {
  idSevice: string;
}

export const ServiceProject = ({ idSevice }: IServiceProject) => {
  const projectsSmm = projects.filter((el) => {
    if (
      el.category === Categories.sites &&
      (idSevice === "site-creation" ||
        idSevice === "development-of-a-unique-design")
    ) {
      return el;
    }

    if (el.category === Categories.smm && idSevice === "smm-promotion") {
      return el;
    }
  });

  const [projectInfo, setProjectInfo] = useState({
    length: 6,
    active: false,
  });

  const onShowFullPost = () => {
    if (projectInfo.active) {
      return setProjectInfo((prv) => ({
        ...prv,
        length: 6,
        active: !prv.active,
      }));
    }

    setProjectInfo((prv) => ({
      ...prv,
      length: projectsSmm.length,
      active: !prv.active,
    }));
  };

  useEffect(() => {
    if (isMobile) {
      setProjectInfo((prv) => ({
        ...prv,
        length: projectsSmm.length,
        active: !prv.active,
      }));
    }
  }, [projectsSmm.length]);

  if (
    !(
      idSevice === "site-creation" ||
      idSevice === "smm-promotion" ||
      idSevice === "development-of-a-unique-design"
    )
  ) {
    return;
  }

  return (
    <section className="flex flex-col 2xl:gap-10 gap-4 2xl:py-0 py-12">
      <div className="flex 2xl:flex-row flex-col items-center justify-between w-full gap-4">
        <ServiceSubTitle text="Наши работы" />
      </div>

      <div className="flex justify-center items-center">
        <div className="2xl:grid flex 2xl:grid-cols-3 2xl:gap-6 gap-4 justify-start items-start p-4 2xl:overflow-visible overflow-y-scroll">
          {projectsSmm.slice(0, projectInfo.length).map(({ id, img }) => (
            <CardProject key={id} img={img} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        {projectsSmm.length > 6 && (
          <Button onClick={onShowFullPost} className="2xl:block hidden">
            {projectInfo.active ? "Свернуть" : "Смотреть все проекты"}
          </Button>
        )}
      </div>
    </section>
  );
};
