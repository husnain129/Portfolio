import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../varients";
const Work = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center">
      <motion.h1
        ref={ref}
        variants={fadeIn("up")}
        initial="initial"
        animate={controls}
        className="text-7xl"
      >
        latest<span className="pl-7 text-[#df9f2a] italic">work</span>
      </motion.h1>
      <motion.h1
        ref={ref}
        variants={fadeIn("up")}
        initial="initial"
        animate={controls}
        className="text-2xl pt-12"
      >
        These are some of my recent favorites always subject to change.
      </motion.h1>
    </div>
  );
};

export default Work;
