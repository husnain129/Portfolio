import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { imgVarient, x_axis_varient } from "../../varients";

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
      className="md:h-[100vh] sm:h-max h-max w-full md:mt-4 sm:mt-4 mt-6 mb-5 p-0 "
    >
      <div className="grid md:grid-cols-2 md:mt-0 sm-grid-rows-2 h-full justify-center">
        <div className="flex items-center justify-center">
          <img
            src="/profile.jpg"
            alt=""
            className="shadow drop-shadow-lg saturate-150 rounded z-[-100] md:w-[450px] md:mx-5 sm:w-[65%] w-[60%]"
          />
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="initial"
          variants={x_axis_varient}
          className="flex flex-col md:items-start sm:items-center items-center justify-center gap-10 md:pr-24 sm:pr-0 sm:pt-4 pt-4"
        >
          <h1 className="uppercase md:text-5xl sm:text-3xl text-2xl">
            <span className="italic text-[orange]">Hi!</span> i am husnain
          </h1>
          <p className="md:text-xl sm:text-lg text-base md:px-0 sm:px-6 px-6">
            I am award-winning product designer specialized in UX/UI, currently
            living in London, UK. Where I have been working as a freelancer for
            about 7 years.
          </p>
          <p className="md:text-xl sm:text-lg text-base md:px-0 sm:px-6 px-6">
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
