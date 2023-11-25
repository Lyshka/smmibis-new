"use client";

import { useContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { Categories, projects } from "@/constants/projects";
import { Title } from "../Title/Title";
import { SelectedMenu } from "./SelectedMenu";
import { Button } from "../Button/Button";
import { CardProject } from "./CardProject";
import { MainContext } from "@/context/MainContext";

export const Projects = () => {
  const { categoryProjects } = useContext(MainContext);

  const [filteredProjects, setFilteredProjects] = useState(projects);
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
      length: filteredProjects.length,
      active: !prv.active,
    }));
  };

  useEffect(() => {
    if (categoryProjects === Categories.all)
      return setFilteredProjects(projects);

    const filtered = projects.filter(
      ({ category }) => category === categoryProjects
    );

    setFilteredProjects(filtered);
  }, [categoryProjects]);

  useEffect(() => {
    if (isMobile) {
      setProjectInfo((prv) => ({
        ...prv,
        length: filteredProjects.length,
        active: !prv.active,
      }));
    }
  }, [filteredProjects.length]);

  return (
    <section className="flex justify-center items-center">
      <div className="container 2xl:py-[60px] py-6 flex flex-col 2xl:gap-10 gap-4">
        <div className="flex 2xl:flex-row flex-col items-center justify-between w-full gap-4">
          <Title text="Проекты" />

          <SelectedMenu />
        </div>

        <div className="flex justify-center items-center">
          <div className="2xl:grid flex 2xl:overflow-auto 2xl:grid-cols-3 2xl:gap-6 gap-4 justify-start items-start overflow-y-scroll">
            {filteredProjects
              .slice(0, projectInfo.length)
              .map(({ id, img }) => (
                <CardProject key={id} img={img} />
              ))}
          </div>
        </div>

        {filteredProjects.length > 6 && (
          <Button onClick={onShowFullPost} className="2xl:block hidden">
            {projectInfo.active ? "Свернуть" : "Смотреть все проекты"}
          </Button>
        )}
      </div>
    </section>
  );
};
