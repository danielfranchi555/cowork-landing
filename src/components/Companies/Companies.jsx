import React from "react";
import companie1 from "../../../public/images/companies/logo-1.svg";
import companie2 from "../../../public/images/companies/logo-2.svg";
import companie3 from "../../../public/images/companies/logo-3.svg";
import companie4 from "../../../public/images/companies/logo-4.svg";
import companie5 from "../../../public/images/companies/logo-5.svg";

import Image from "next/image";
import MotionTransition from "../Transitions/FadeTransition";
import Transition from "./Transition/Transition";

const Companies = () => {
  const brands = [companie1, companie2, companie3, companie4, companie5];

  return (
    <div className="flex flex-col items-center justify-center mt-28  gap-8 ">
      <MotionTransition className="font-bold text-[14px]">
        TRUSTED BY LEADING COMPANIES
      </MotionTransition>
      <Transition className="flex items-center gap-4 md:gap-14 md:flex md:flex-row md: justify-between md:items-center md:justify-center ">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            width="auto"
            height="auto"
            className="w-[50px] md:w-[120px]"
            alt="logo-companies"
          />
        ))}
      </Transition>
    </div>
  );
};

export default Companies;
