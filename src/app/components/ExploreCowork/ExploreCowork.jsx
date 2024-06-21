import Image from "next/image";
import React from "react";
import image from "../../../../public/images/explore/rectangle.svg";

const ExploreCowork = () => {
  return (
    <div className="flex flex-col gap-6 items-center text-center mt-20">
      <span className="font-bold text-[13px]">A VIRTUAL TOUR</span>
      <div className=" flex flex-col gap-2">
        <h4 className="text-2xl font-semibold md:text-5xl">
          Explore Cowork Through Our{" "}
        </h4>
        <p className="text-2xl  font-semibold flex items-center justify-center gap-2 md:text-5xl">
          <Image
            src={image}
            width={180}
            height={180}
            alt="icon"
            className=""
            quality={100}
          />
          Lens
        </p>
      </div>
      <p>
        Experience the essence of Cowork before setting foot in our dynamic
        spaces. Our immersive video tour gives You a sneak peek into the vibrant
        atmosphere, outing. edge facilities, and collaborative energy that
        define the Cowork experience.
      </p>
      <button className="border-2 border-black font-bold px-6 py-4 max-w-max rounded-full">
        Explore Spaces
      </button>
      <Image />
    </div>
  );
};

export default ExploreCowork;
