"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type RevealAnimationProps = {
  children: ReactNode;
  delay: number;
  classes: string | "";
};

const animationVariant = {
  initial: { y: 50, opacity: 0 },
  animate: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      delay:delay
    },
  }),
};

const RevealAnimation = ({
  children,
  delay,
  classes,
}: RevealAnimationProps) => {
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

export default RevealAnimation;
