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
        "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
    },
    {
      title: "How flexible are Cowork's membership plans?",
      description:
        "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
    },
    {
      title: "How flexible are Cowork's membership plans?",
      description:
        "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
    },
    {
      title: "How flexible are Cowork's membership plans?",
      description:
        "Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 md:flex-row md:items-start mt-40 w-full  ">
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
