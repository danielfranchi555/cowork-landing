import { OpenSans } from "@/app/config/fonts";
import React from "react";
import { motion } from "framer-motion";

export const Ulmobile = ({ toggle }) => {
  const ul = ["About", "Clients", "Blog", "Contact"];
  return (
    <ul
      className={` font-bold flex flex-col gap-10 mt-10 text-4xl ${
        toggle ? "text-white" : "text-[#1D1E1C]"
      } ${OpenSans.className} `}
    >
      {ul.map((item, index) => (
        <>
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }} // Propiedades iniciales (invisible y desplazada hacia abajo)
            animate={{ opacity: 1, y: 0 }} // Propiedades animadas (visible y en posición original)
            transition={{ duration: 0.5, delay: index * 0.1 }} // Duración y retardo escalonado
          >
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        </>
      ))}
    </ul>
  );
};
