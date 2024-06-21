import Image from "next/image";
import React from "react";
import image from "../../../../public/images/choose/img-choose.png";
import membership from "../../../../public/images/choose/membership.svg";
import Planetspaces from "../../../../public/images/choose/Planetspaces.svg";
import pricing from "../../../../public/images/choose/pricing.svg";
import svg1 from "../../../../public/images/choose/svg-1.svg";
import svg2 from "../../../../public/images/choose/svg-2.svg";
import svg3 from "../../../../public/images/choose/svg-3.svg";
import rectangle from "../../../../public/images/choose/rectangle-1.svg";

export const Choose = () => {
  const skills = [
    {
      image: Planetspaces,
      title: "Flexible Spaces",
      description:
        " Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs.",
      svg: svg1,
    },
    {
      image: membership,
      title: "Tailored Memberships",
      description:
        " Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style.",
      svg: svg2,
    },
    {
      image: pricing,
      title: "Transparent Pricing",
      description:
        " Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank.",
      svg: svg3,
    },
  ];

  return (
    <div className="flex flex-col gap-10 ">
      <section className="flex flex-col justify-center items-center gap-2 mt-20  md:flex-row ">
        <p className="font-semibold flex gap-2 text-3xl md:text-5xl  ">
          Why choose
          <Image src={rectangle} width={180} height={180} alt="img" />
        </p>
        <p className="font-semibold text-3xl md:text-5xl ">Cowork</p>
      </section>
      <section className="flex flex-col gap-6 md:flex-row">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center px-4"
          >
            <div className="relative">
              <Image
                src={skill.image}
                width={60}
                height={60}
                alt="icon"
                className="relative z-10" // Aseguramos que la primera imagen tenga una posición relativa
              />
              <Image
                className="absolute top-[14px] left-6 z-0"
                src={skill.svg}
                width={40}
                height={40}
                alt="svg"
              />
            </div>
            <p className="font-bold">{skill.title}</p>
            <p className="text-center text-[15px]">{skill.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
