import Image from "next/image";
import React from "react";
import heroImage from "../../../public/images/hero/cowork-hero.jpg";

import vector from "../../../public/images/hero/vector.svg";

export const Hero = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-6 text-center py-10 px-4 md:grid md:grid-cols-2 md:justify-between">
      <div className="flex flex-col gap-8 text-center items-center  md:h-auto md:flex md:flex-col md:text-start md:items-start">
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
      </div>
      <div className=" md:flex md:items-center md:justify-end ">
        <Image
          src={heroImage}
          style={{
            maxWidth: "100%",
            maxHeight: "auto",
          }}
          className=" rounded-xl"
          alt="image-hero"
        />
      </div>
    </div>
  );
};
