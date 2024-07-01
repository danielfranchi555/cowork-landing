import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/hero/cowork-hero.jpg";

import vector from "../../../public/images/hero/vector.svg";
import MotionTransition from "../Transitions/FadeTransition";

export const Hero = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-6 text-center py-10 px-4 md:grid md:grid-cols-2 md:justify-between">
      <MotionTransition className="flex flex-col gap-8 text-center items-center  md:h-auto md:flex md:flex-col md:text-start md:items-start">
        <h1 className="text-[#1D1E1C]  z-10 relative  text-5xl font-semibold sm:text-4xl md:text-6xl xl:text-[90px]">
          Elevate Your Workspace with
          <span className="relative z-10 spanAbsolute"> Cowork </span>
        </h1>
        <p className="">
          Welcome to Cowork - where innovation meets collaboration in the heart
          of productivity! Unleash ! your potential in our thoughtfully designed
          coworking spaces, tailored to inspire creativity and foster
          connections.
        </p>
        <button className="bg-[#1D1E1C] text-[13px] text-white max-w-max py-[14px] px-6 font-bold rounded-full">
          Claim Your Spot
        </button>
      </MotionTransition>
      <MotionTransition className=" md:flex md:items-center md:justify-end ">
        <Image
          src="https://res.cloudinary.com/dcotr8wpa/image/upload/v1719250371/CoworkLanding/cowork-hero_gtpglj.jpg"
          width={600}
          height={600}
          quality={80}
          sizes="100vw"
          className=" rounded-xl shadow-md  "
          alt="image-hero"
        />
      </MotionTransition>
    </div>
  );
};
