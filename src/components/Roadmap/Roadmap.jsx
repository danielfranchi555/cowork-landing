import React from "react";
import AccordionComponent from "../AccordionComponent/AccordionComponent";

const Roadmap = () => {
  const accordion = [
    {
      title: "How flexible are Cowork's membership plans?",
      description:
        "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
    },
    {
      title:
        "What kind of events and networking opportunities does Cowork provide?",
      description:
        "Explore Cowork's dynamic events and networking opportunities designed to connect professionals through industry meetups, workshops, and social gatherings. Enhance your network, gain insights, and build meaningful relationships within our vibrant community.",
    },
    {
      title: "Can I tour the Cowork space before committing to a membership?",
      description:
        "Yes! Schedule a tour of Cowork's space to see our facilities before committing to a membership. Explore our environment and amenities firsthand to see how Cowork can meet your needs. Discover the benefits of joining our community today!",
    },
    {
      title: "Is Cowork suitable for remote teams and distributed workforces?",
      description:
        "Yes, Cowork is perfect for remote teams and distributed workforces. Our flexible workspace solutions support productivity and collaboration, whether your team works locally or across different locations.",
    },
    {
      title: "What measures does Cowork take for environmental sustainability?",
      description:
        "Cowork is committed to environmental sustainability. We implement energy-efficient practices, use eco-friendly materials, and promote recycling programs to reduce our carbon footprint and create a green workspace for our community.",
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center text-center gap-6 md:flex-row md:items-start mt-40 w-full"
      id="About"
    >
      <section className=" text-start flex flex-col justify-start gap-4 md:w-[50%]">
        <span className="font-bold text-[13px]">
          Frequently Asked Questions
        </span>
        <h4 className="text-2xl font-semibold md:text-5xl">
          Your Roadmap to Coworking Clarity
        </h4>
        <p className="text-[14px] md:max-w-[400px]">
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions that can be answered.
        </p>
      </section>
      <section className="md:w-[50%] ">
        <AccordionComponent accordion={accordion} />
      </section>
    </div>
  );
};

export default Roadmap;
