import { motion } from "framer-motion";
import { FiCornerRightDown, FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { fadeIn } from "../../varients";
const Menu = () => {
  return (
    <div className="flex m-0 p-0 items-center justify-center h-[90vh] w-[100%] ">
      <div className="flex flex-col justify-around items-start h-full w-[90%] ">
        <div className="flex flex-col space-y-[-90px] items-start">
          <h1 className="text-[130pt] font-mono ">Web</h1>
          <h1 className="text-[130pt] font-mono ">Developer</h1>
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
      <div className="flex items-center space-x-6">
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
