"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Transition = ({ children, className, delay = 0 }) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      translateY: "10%", // Desplazamiento desde abajo
      transition: {
        type: "tween",
        duration: 0.2, // Reducir duración para una animación más rápida
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    visible: {
      opacity: 1,
      translateY: "0%", // Posición final en el lugar
      transition: {
        type: "tween",
        duration: 0.3, // Reducir duración para una animación más rápida
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
    }
  }, [isinView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Transition;
