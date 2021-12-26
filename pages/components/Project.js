import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeIn, x_axis_varient } from "../../varients";

const images = [
  "https://assets.website-files.com/6148524fa5f7aefd2b0e6501/6149de4958d3df5bb51b8915_port-1-p-800.jpeg",
  "https://assets.website-files.com/6148524fa5f7aefd2b0e6501/6149de520cc1bb53cdf885a5_port-2.jpg",
  "https://assets.website-files.com/6148524fa5f7aefd2b0e6501/6149de625734872a42afeafb_port-6-p-800.jpeg",
  "https://assets.website-files.com/6148524fa5f7aefd2b0e6501/6149de7025f2b715d2c71b97_port-4-p-800.jpeg",
];

const Project = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <>
      {images.map((img, index) => {
        let dir = index % 2 === 0 ? "flex-col-reverse" : "flex-col";
        return (
          <>
            <div className="md:h-[90vh]">
              <ProjectShow id={index} imgUrl={img} flexDir={dir} />
            </div>
          </>
        );
      })}
    </>
  );
};

function ProjectShow({ flexDir, imgUrl }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <div className="flex items-center mt-5 justify-center w-full h-max md:h-[90vh] overflow-hidden">
      {flexDir === "flex-col-reverse" ? (
        <div className="md:grid md:grid-cols-2 flex flex-col items-center justify-center ">
          <ProjectDetail flexDir={flexDir} ref={ref} controls={controls} />
          <motion.img
            ref={ref}
            variants={x_axis_varient}
            initial="initial"
            animate={controls}
            src={imgUrl}
            alt="sad"
            className="object-cover w-[80%] h-[80%] md:w-[450px] md:h-[90%] overflow-hidden mt-5 :mt-0"
          />
        </div>
      ) : (
        <div className="md:grid md:grid-cols-2 flex flex-col items-center justify-center">
          <motion.img
            ref={ref}
            variants={x_axis_varient}
            initial="initial"
            animate={controls}
            src={imgUrl}
            alt="sad"
            className="object-cover w-[80%] h-[80%] md:w-[500px] md:h-[90%] overflow-hidden mb-5 :mb-0"
          />
          <ProjectDetail flexDir={flexDir} ref={ref} controls={controls} />
        </div>
      )}
    </div>
  );
}

function ProjectDetail({ ref, controls, flexDir }) {
  let flexDirClass =
    flexDir === "flex-col-reverse"
      ? "md:items-end mt-10 mb-10 md:pr-12"
      : "md:items-start md:pl-12";
  let flexDirClassUpdate =
    "flex flex-col gap-7 items-center justify-center" + " " + flexDirClass;
  return (
    <div className={flexDirClassUpdate}>
      <motion.h1
        ref={ref}
        variants={fadeIn("down")}
        initial="initial"
        animate={controls}
        className="md:text-5xl sm:text-4xl text-2xl uppercase"
      >
        pendisse-pulvinar
      </motion.h1>
      <motion.p
        ref={ref}
        variants={fadeIn("down")}
        initial="initial"
        animate={controls}
        className="md:text-xl sm:text-xl text-lg"
      >
        Strategy, Concept, Web Design, Marketing
      </motion.p>
      <button className="md:text-2xl sm:text-xl text-lg border-b-2 border-[orange] pb-1">
        view project
      </button>
    </div>
  );
}

export default Project;
