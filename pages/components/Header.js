import { motion } from "framer-motion";
import { fadeIn } from "../../varients";

export const Header = () => {
  return (
    <div className="flex sticky top-0 bg-white m-0 p-0 items-center justify-center h-[10vh] w-full ">
      <motion.nav
        variants={fadeIn("up")}
        initial="initial"
        animate="animate"
        className="flex m-0 items-center justify-between  w-[90%] "
      >
        <h1 className="text-3xl font-semibold cursor-pointer ease-out duration-300">
          Muhammad Husnain
        </h1>
        <h1 className="text-2xl font-semibold md:tracking-widest tracking-normal cursor-pointer ease-out duration-300">
          Menu
        </h1>
      </motion.nav>
    </div>
  );
};
