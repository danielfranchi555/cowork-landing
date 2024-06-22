import Image from "next/image";
import React from "react";
import image from "../../../public/images/explore/rectangle.svg";
import video from "../../../public/images/explore/Imagevideo.png";

const ExploreCowork = () => {
  return (
    <div className="flex flex-col gap-6 items-center text-center mt-40">
      <span className="font-bold text-[13px]">A VIRTUAL TOUR</span>
      <div className=" flex flex-col gap-2">
        <h4 className="text-2xl font-semibold md:text-5xl">
          Explore Cowork Through Our{" "}
        </h4>
        <p className="text-2xl  font-semibold flex items-center justify-center gap-2 md:text-5xl">
          <Image
            src={image}
            width={"auto"}
            height={"auto"}
            alt="icon"
            className="w-[130px] md:w-[200px]"
            quality={100}
          />
          Lens
        </p>
      </div>
      <p className="text-[14px] max-w-[800px]">
        Experience the essence of Cowork before setting foot in our dynamic
        spaces. Our immersive video tour gives You a sneak peek into the vibrant
        atmosphere, outing. edge facilities, and collaborative energy that
        define the Cowork experience.
      </p>
      <button className="border-[1px] text-[14px] border-black font-bold px-6 py-[12px] max-w-max rounded-full">
        Explore Spaces
      </button>
      <iframe
        src={`https://www.youtube.com/embed/IxRVa1DbSAg`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
        className="rounded-xl md:w-[100%] md:h-[600px] w-[100%] h-[400px]"
      ></iframe>
    </div>
  );
};

export default ExploreCowork;
