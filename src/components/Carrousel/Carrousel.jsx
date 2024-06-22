"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Carrousel = ({ clients }) => {
  const [current, setCurrent] = useState(0);

  const previuSlide = () => {
    if (current === 0) setCurrent(clients.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === clients.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="md:hidden relative py-10 w-full m-auto overflow-hidden">
      <div className="flex justify-end gap-4 w-full top-0 left-0 absolute z-10">
        <span className="text-1xl">
          <IoIosArrowRoundBack
            size={40}
            onClick={previuSlide}
            className="cursor-pointer"
          />
        </span>
        <span className="text-1xl">
          <IoIosArrowRoundForward
            size={40}
            onClick={nextSlide}
            className="cursor-pointer"
          />
        </span>
      </div>
      <div
        className={`flex transition-transform ease-in-out duration-500 w-full`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex flex-col items-center justify-center text-center gap-4 rounded-md border px-6 py-4"
          >
            <Image
              src={client.image}
              width={60}
              height={60}
              alt="image-person"
              className="object-contain"
            />
            <p className="text-[14px]">{client.testimonial}</p>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">{client.name}</p>
              <p className="text-[13px]">{client.rol}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
