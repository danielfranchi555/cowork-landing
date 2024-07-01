import React from "react";
import companie1 from "../../../public/images/companies/_logocompanie-2.svg";
import companie2 from "../../../public/images/companies/_logocompanie-3.svg";
import companie3 from "../../../public/images/companies/_logocompanie-4.svg";
import companie4 from "../../../public/images/companies/_logocompanie-5.svg";
import companie5 from "../../../public/images/companies/_logocompanie-6.svg";
import Image from "next/image";
import FadeUp from "../Transitions/FadeUp/FadeUp";
import MotionTransition from "../Transitions/FadeTransition";

const Companies = () => {
  const brands = [companie1, companie2, companie3, companie4, companie5];

  return (
    <div className="flex flex-col items-center justify-center mt-28  gap-6">
      <MotionTransition className="font-bold text-[14px]">
        TRUSTED BY LEADING COMPANIES
      </MotionTransition>
      <FadeUp className="grid grid-cols-5 md:gap-28">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            width="auto"
            height="auto"
            className="w-[60px] md:w-[90px]"
            alt="logo-companies"
          />
        ))}
      </FadeUp>
    </div>
  );
};

export default Companies;
