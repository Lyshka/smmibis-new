import { About } from "@/components/About/About";
import { Coloboration } from "@/components/Coloboration";
import { Comments } from "@/components/Comments";
import { Contacts } from "@/components/Contacts";
import { News } from "@/components/News/News";
import { Packages } from "@/components/Packages/Packages";
import { DiscountPopup } from "@/components/Popup/DiscountPopup";
import { FeedbackPopup } from "@/components/Popup/FeedbackPopup";
import { Price } from "@/components/Price/Price";
import { Projects } from "@/components/Projects/Projects";
import { MainSlider } from "@/components/Slider/MainSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <About />
      <Price />
      <Packages />
      <Projects />
      <Coloboration />
      <Comments />
      <Contacts />
      <News />
      <DiscountPopup />
      <FeedbackPopup />
    </>
  );
}
