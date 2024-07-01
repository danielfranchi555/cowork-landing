"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionTransition = ({ children, className, delay }) => {
  const fadeIn = {
    hidden: {
      opacity: 0,
      translateY: "20%", // Desplazamiento desde abajo
      transition: {
        type: "tween",
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    visible: {
      opacity: 1,
      translateY: "0%", // Posición final en el lugar
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
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
    // <motion.div
    //   initial="hidden"
    //   animate="visible"
    //   variants={fadeIn}
    //   className={className}
    // >
    //   {children}
    // </motion.div>
  );
};

export default MotionTransition;
