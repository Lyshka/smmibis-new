import { colobaration } from "@/constants/coloboration";
import Image from "next/image";

export const ColaborationSlider = () => {
  return (
    <div className="WrapperSliderColoboration relative">
      <div className="flex gap-6 sliderColoboration">
        {[...colobaration, ...colobaration].map(({ id, img }, idx) => (
          <div
            key={`${id}-${idx}`}
            className="2xl:w-[307px] w-[253px] 2xl:h-[176px] h-[145px] rounded-lg bg-white shadow-card-colobaration inline-flex justify-center items-center"
          >
            <Image priority className="2xl:block hidden object-scale-down" width={192} height={134} src={img} alt="colobaration" />
            <Image priority className="2xl:hidden block object-scale-down" width={94} height={94} src={img} alt="colobaration" />
          </div>
        ))}
      </div>
    </div>
  );
};
