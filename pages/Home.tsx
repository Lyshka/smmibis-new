import { About } from "@/components/About/About";
import { Coloboration } from "@/components/Coloboration";
import { Comments } from "@/components/Comments";
import { Contacts } from "@/components/Contacts";
import { Price } from "@/components/Price/Price";
import { Projects } from "@/components/Projects/Projects";
import { MainSlider } from "@/components/Slider/MainSlider";

export const Home = () => {
  return (
    <>
      <MainSlider />
      <About />
      <Price />
      <Projects />
      <Coloboration />
      <Comments />
      <Contacts />
    </>
  );
};
