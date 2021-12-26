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
    <div className="w-full md:h-[70vh] sm:h-[45vh] md:px-0 sm:px-0 px-8 h-max py-20  flex flex-col text-center items-center justify-center">
      <motion.h1
        ref={ref}
        variants={fadeIn("up")}
        initial="initial"
        animate={controls}
        className="md:text-7xl sm:text-6xl text-4xl"
      >
        latest
        <span className="md:pl-7 sm:pl-5 pl-3 text-[#df9f2a] italic">work</span>
      </motion.h1>
      <motion.h1
        ref={ref}
        variants={fadeIn("up")}
        initial="initial"
        animate={controls}
        className="md:text-3xl sm:text-3xl text-xl md:pt-12 sm:pt-10 pt-8"
      >
        These are some of my recent favorites always subject to change.
      </motion.h1>
    </div>
  );
};

export default Work;
