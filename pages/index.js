import About from "../components/About";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Project from "../components/Project";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="w-full h-auto scroll-smooth hover:scroll-auto md:scroll-auto">
      <Header />
      <Menu />
      <About />
      <Work />
      <Project />
    </div>
  );
}
