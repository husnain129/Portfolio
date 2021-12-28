import { motion } from "framer-motion";
import { FiCornerRightDown, FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { fadeIn } from "../../varients";
// bg-[#F9F3DF]
const Menu = () => {
  return (
    <div className="flex mt-0 p-0  items-center justify-center md:h-[90vh] sm:h-[60vh] h-[40vh] w-[100%] md:py-0">
      <div className="flex flex-col md:justify-around sm:justify-between justify-between items-start  w-[90%] ">
        <div className="flex flex-[.3] w-full flex-col md:space-y-[-90px] sm:space-y-[-50px] space-y-[-20px] items-start">
          <h1 className="md:text-[130pt] sm:text-[75pt] text-[35pt] font-mono ">
            Web
          </h1>
          <h1 className="md:text-[130pt] sm:text-[75pt] text-[35pt] md:my-0 sm:my-9 my-9  font-mono ">
            Developer
          </h1>
        </div>
        <MenuFooter />
      </div>
    </div>
  );
};

function MenuFooter() {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="flex md:flex-row sm:flex-col flex-col md:items-center sm:items-start items-start justify-between min-w-full h-auto md:mt-0 sm:mt-4 mt-4 md:space-y-0 sm:space-y-3 space-y-3"
    >
      <div className="flex items-center md:space-x-6 sm:space-x-4 space-x-3">
        <IoLogoInstagram className="cursor-pointer md:text-3xl sm:2text-xl text-2xl" />
        <RiTwitterLine className="cursor-pointer md:text-3xl sm:text-2xl text-2xl" />
        <TiSocialFacebook className="cursor-pointer md:text-3xl sm:text-2xl text-2xl" />
        <FiGithub className="cursor-pointer md:text-3xl sm:text-xl text-xl" />
      </div>
      <div className="flex items-center justify-center space-x-2 cursor-pointer">
        <p className="text-lg font-semibold md:tracking-normal sm:tracking-widest tracking-widest">
          Scroll
        </p>
        <FiCornerRightDown size={20} />
      </div>
    </motion.nav>
  );
}

export default Menu;
