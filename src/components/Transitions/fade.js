export const fade = () => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: 0.1,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.0,
        delay: 0.1,
        ease: [0.45, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeUp = () => {
  return {
    hidden: {
      opacity: 0,
      translateY: "100%", // Desplazamiento desde abajo
      transition: {
        type: "tween",
        duration: 2.1,
        delay: 0.1,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      opacity: 1,
      translateY: "0%", // Posición final en el lugar
      transition: {
        type: "tween",
        duration: 1.0,
        delay: 0.1,
        ease: [0.45, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeFromRight = () => {
  return {
    hidden: {
      opacity: 0,
      translateX: "10%", // Desplazamiento desde la derecha
      transition: {
        type: "tween",
        duration: 1.5, // Aumenta la duración para una transición más suave
        delay: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0], // Curva de easing más suave
      },
    },
    visible: {
      opacity: 1,
      translateX: "0%", // Posición final en el lugar
      transition: {
        type: "tween",
        duration: 2.5, // Aumenta la duración para una transición más suave
        delay: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0], // Curva de easing más suave
      },
    },
  };
};

export const fadeFromLeft = () => {
  return {
    hidden: {
      opacity: 0,
      translateX: "-10%", // Desplazamiento desde la izquierda
      transition: {
        type: "tween",
        duration: 2.5, // Aumenta la duración para una transición más suave
        delay: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0], // Curva de easing más suave
      },
    },
    visible: {
      opacity: 1,
      translateX: "0%", // Posición final en el lugar
      transition: {
        type: "tween",
        duration: 2.5, // Aumenta la duración para una transición más suave
        delay: 0.1,
        ease: [0.25, 0.1, 0.25, 1.0], // Curva de easing más suave
      },
    },
  };
};
