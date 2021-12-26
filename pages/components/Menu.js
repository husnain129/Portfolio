import { motion } from "framer-motion";
import { FiCornerRightDown, FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { fadeIn } from "../../varients";
const Menu = () => {
  return (
    <div className="flex mt-0 p-0 items-center justify-center md:h-[90vh] sm:h-[40vh] h-[40vh] w-[100%] md:py-0 sm:py-5 py-5 bg-[#F9F3DF]">
      <div className="flex flex-col md:justify-around sm:justify-between justify-between items-start h-full w-[90%] ">
        <div className="flex flex-col md:space-y-[-90px] sm:space-y-[-50px] space-y-[-30px] items-start">
          <h1 className="md:text-[130pt] sm:text-[90pt] text-[40pt] font-mono ">
            Web
          </h1>
          <h1 className="md:text-[130pt] sm:text-[90pt] text-[40pt] md:my-0 sm:my-9 my-9  font-mono ">
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
      className="flex items-center justify-between min-w-full h-auto "
    >
      <div className="flex items-center md:space-x-6 sm:space-x-4 space-x-3">
        <IoLogoInstagram size={25} className="cursor-pointer" />
        <RiTwitterLine size={25} className="cursor-pointer" />
        <TiSocialFacebook size={25} className="cursor-pointer" />
        <FiGithub size={20} className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-center space-x-2 cursor-pointer">
        <p className="text-xl font-semibold">Scroll</p>
        <FiCornerRightDown size={22} />
      </div>
    </motion.nav>
  );
}

export default Menu;
