"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const FadeIn = ({ children, className, delayCard }) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      translateY: "20%", // Desplazamiento desde abajo
      transition: {
        type: "tween",
        duration: 1.5,
        ease: [1.25, 0.1, 0.25, 1.0],
      },
    },
    visible: {
      opacity: 1,
      translateY: "0%", // Posición final en el lugar
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delayCard,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const ref = useRef(null);
  const isinView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
      slideControls.start("visible");
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

export default FadeIn;
