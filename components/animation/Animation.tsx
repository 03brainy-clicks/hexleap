import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  variants: {
    initial: Record<string, any>;
    animate: Record<string, any>;
  };
  transition?: Transition;
}

const AnimationComponent: React.FC<AnimationProps> = ({
  children,
  variants,
  transition,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: true }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationComponent;
