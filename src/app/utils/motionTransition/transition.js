export const fadeIn = () => {
  return {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3, // Duración más corta para un fade más rápido
        delay: 0.1,
        ease: "easeOut", // Curva de facilidad para desvanecimiento
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3, // Duración más corta para un fade más rápido
        delay: 0.1,
        ease: "easeIn", // Curva de facilidad para desvanecimiento
      },
    },
  };
};
