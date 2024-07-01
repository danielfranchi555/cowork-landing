import React from "react";
import coworkImage from "../../../public/images/statitics/cowork-space.jpg";

import Image from "next/image";
import svg1 from "../../../public/images/choose/svg-1.svg";
import svg2 from "../../../public/images/choose/svg-2.svg";
import svg3 from "../../../public/images/choose/svg-3.svg";
import svg4 from "../../../public/images/choose/svg-4.svg";
import FadeRight from "../Transitions/FadeRight/FadeRight";
import FadeLeft from "../Transitions/FadeLeft/FadeLeft";

const Statistics = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center md:flex-row mt-28 gap-6 ">
      <FadeLeft className="flex flex-col gap-4 md:w-[100%]  md:text-start md:gap-8">
        <span className="font-bold text-[13px]">COWORK IN NUMBERS</span>
        <h3 className="text-2xl font-semibold md:text-5xl">
          Transformative Statistics That Speak Volumes
        </h3>
        <section className="grid grid-cols-2 gap-4 ">
          <div className="flex flex-col gap-2 relative">
            <span className="text-5xl font-bold relative z-10">240%</span>
            <Image
              className="absolute top-5 left-14 z-0"
              src={svg1}
              width={38}
              height={38}
              alt="svg"
            />
            <p className="text-[13px]">Community Growth </p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <span className="text-5xl font-bold relative z-10">99%</span>{" "}
            <Image
              className="absolute top-5 left-14 z-0"
              src={svg2}
              width={38}
              height={38}
              alt="svg"
            />
            <p className="text-[13px]">Technology Uptime</p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <span className="text-5xl font-bold relative z-10">50+</span>{" "}
            <Image
              className="absolute top-5 left-14 z-0"
              src={svg3}
              width={38}
              height={38}
              alt="svg"
            />
            <p className="text-[13px]">Happy Members </p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <span className="text-5xl font-bold relative z-10">100%</span>{" "}
            <Image
              className="absolute top-5 left-14 z-0"
              src={svg4}
              width={38}
              height={38}
              alt="svg"
            />
            <p className="text-[13px]">Renewable Energy Sources</p>
          </div>
        </section>
      </FadeLeft>
      <FadeRight className="md:w-[100%] border ">
        <Image
          src={coworkImage}
          width={700}
          height={700}
          alt="cowork-image"
          className="rounded-xl "
        />
      </FadeRight>
    </div>
  );
};

export default Statistics;
