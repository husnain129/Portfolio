import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { imgVarient, x_axis_varient } from "../varients";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="initial"
      variants={imgVarient}
      className="h-[100vh] w-full m-0 p-0 "
    >
      <div className="grid grid-cols-2 h-full justify-center">
        <div className="flex items-center justify-center">
          <img src="/user.jpeg" alt="" className="shadow" />
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="initial"
          variants={x_axis_varient}
          className="flex flex-col items-start justify-center gap-10 pr-24"
        >
          <h1 className="uppercase text-5xl">
            <span className="italic text-[orange]">Hi!</span> i am husnain
          </h1>
          <p className="text-xl">
            I am award-winning product designer specialized in UX/UI, currently
            living in London, UK. Where I have been working as a freelancer for
            about 7 years.
          </p>
          <p className="text-xl">
            I work from the user experience to the visual details and then
            transform these in working code. I am a minimal designer and I
            really like the simple and elegant style. I Worked with a range of
            clients focusing on web apps and platforms with Tesla in partnership
            with Microsoft.
          </p>
          <p className="font-semibold cursor-pointer border-b-2  border-[orange] ">
            More About me
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
