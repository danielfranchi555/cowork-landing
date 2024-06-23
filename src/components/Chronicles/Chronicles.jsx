import React from "react";
import rectangle from "../../../public/images/insights/rectangle-3.svg";

import image1 from "../../../public/images/insights/image-1.png";
import image2 from "../../../public/images/insights/image-2.png";
import image3 from "../../../public/images/insights/image-3.png";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

export const Chronicles = () => {
  const cards = [
    {
      title: "Trending",
      description: "Navigating the Future: Trends in Modern Coworking Spaces",
      time: " 7 min read",
      image: image1,
    },
    {
      title: "Productivity",
      description: "Mastering Productivity: Tips from Cowork's High Achievers",
      time: " 5 min read",
      image: image2,
    },
    {
      title: "Talk",
      description: "Tech Talk: The Backbone of Cowork's Seamless Experience",
      time: " 10 min read",
      image: image3,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-20 mt-40 text-center">
      <section className=" flex flex-col gap-4 md:justify-center md:items-center">
        <span className="font-bold text-[13px]">COWORK CHRONICLES</span>
        <h4 className="text-2xl font-semibold md:text-5xl flex flex-col gap-2">
          Insights, Innovation, and
          <span className="flex items-center justify-center">
            {" "}
            <Image
              src={rectangle}
              width={"auto"}
              height={"auto"}
              className="w-[120px]"
              alt="rectangle"
            />
            Inspiration
          </span>
        </h4>
        <p className="text-[14px] md:w-[500px] md:text-center">
          Stay updated on the latest trends in coworking, productivity tips, and
          success stories that define the Cowork experience.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((item, index) => (
          <div key={index} className=" text-start flex flex-col gap-4">
            <Image
              src={item.image}
              width={"auto"}
              height={"auto"}
              alt="image"
            />
            <div className="flex items-center gap-4">
              <span className="bg-[#A6E8F6] px-2 py-2 rounded-md text-[14px] font-bold">
                {item.title}
              </span>
              <span>{item.time}</span>
            </div>
            <p className="text-2xl font-semibold">{item.description}</p>
            <div className="flex items-center gap-2 ">
              <span className="text-[13px]">Read More</span>
              <IoIosArrowForward size={18} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
