import React from "react";
import client1 from "../../../public/images/clients/client-1.svg";
import client2 from "../../../public/images/clients/client-2.svg";
import client3 from "../../../public/images/clients/client-3.svg";
import client4 from "../../../public/images/clients/client-4.svg";
import client5 from "../../../public/images/clients/client-5.svg";
import Image from "next/image";
import Carrousel from "../Carrousel/Carrousel";

const Clients = () => {
  const clients = [
    {
      name: "Liam Brown",
      testimonial:
        "“The 24/7 access and secure facilities have been incredibly convenient for my teams flexible schedules. We love the coworking space!”",
      image: client1,
      rol: "Software Engineer, TechStartup Innovations",
      color: `F1F1F1`,
    },
    {
      name: "Michael Thompson",
      testimonial:
        " “The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed.”",
      image: client3,
      rol: "Project Manager, SoftwareSolutions LLC",
      color: `F1F1F1`,
    },
    {
      name: "Michael Rodriguez",
      testimonial:
        "“The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.”",
      image: client4,
      rol: " Creative Director, DesignCraft Studio",
      color: `F1F1F1`,
    },
    {
      name: "Alex Nguyen",
      testimonial:
        " “The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business.”",
      image: client5,
      rol: "Marketing Consultant, Maverick Marketing",
      color: `F1F1F1`,
    },
    {
      name: "Alex Nguyen",
      testimonial:
        " “The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business.”",
      image: client5,
      rol: "Marketing Consultant, Maverick Marketing",
      color: `F1F1F1`,
    },
  ];
  return (
    <div className="flex flex-col gap-10  items-center justify-center mt-20 md:mt-40 ">
      <div className="text-center flex flex-col gap-4">
        <span className="font-bold text-[13px]">COWORK IN WORDS</span>
        <h4 className="text-2xl font-semibold md:text-5xl">
          Heart it from our Clients
        </h4>
      </div>
      <section className="hidden md:grid md:grid-cols-3 md:gap-4 ">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`bg-[#F1F1F1] flex flex-col items-center justify-center px-4 py-8 text-center gap-4 rounded-xl`}
          >
            <Image
              src={client.image}
              width={50}
              height={50}
              alt="image-person"
            />
            <p
              className={`text-[14px] ${
                client.testimonial.length > 163 && "h-[100px] md:h-[85px] "
              } `}
            >
              {client.testimonial}
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[14px]">{client.name}</p>
              <p className=" text-[14px]">{client.rol}</p>
            </div>
          </div>
        ))}
      </section>
      <Carrousel clients={clients} />
    </div>
  );
};

export default Clients;
