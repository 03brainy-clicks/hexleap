import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type SideAnimationProps = {
  children: ReactNode;
  delay: number;
  classes: string | "";
};

const animationVariant = {
  initial: { x: 100, opacity: 0 },
  animate: (delay: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: .7,
    },
  }),
};

const SideAnimation = ({ children, delay, classes }: SideAnimationProps) => {
  const classname = classes || "";
  return (
    <motion.div
      variants={animationVariant}
      initial="initial"
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      custom={delay}
      className={`${classname}`}
    >
      {children}
    </motion.div>
  );
};

export default SideAnimation;
