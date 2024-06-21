"use client";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Ulmobile } from "./Ulmobile";
import { IoIosClose } from "react-icons/io";
import MotionTransition from "@/app/utils/motionTransition/MotionTransition";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const ul = ["About", "Pricing", "Blog", "Events"];

  return (
    <div className={`py-4 px-4 ${toggle ? "bg-[#1D1E1C]" : "bg-white"}`}>
      <div className="flex justify-between items-center">
        <h2
          className={`text-2xl font-bold ${
            toggle ? "text-white" : "text-[#1D1E1C]"
          }`}
        >
          Cowork
        </h2>
        <div className="bg-[#1D1E1C] md:hidden  rounded-full">
          {toggle ? (
            <IoIosClose
              className=" px-2"
              size={50}
              color="white"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <IoIosMenu
              className=" px-2"
              size={50}
              color="white"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>

        {/* UL DESKTOP */}
        <ul className="hidden md:flex items-center gap-4 ">
          {ul.map((item, index) => (
            <li className="font-light cursor-pointer" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {/* UL DESKTOP */}
      </div>

      {/* UL MOBILE */}
      {toggle && <Ulmobile toggle={toggle} />}

      {/* UL MOBILE */}
    </div>
  );
};

export default Navbar;
