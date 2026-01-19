import "../assets/styles/intro.css";
import BgEffects from "./BgEffects";
import CTAbuttons from "./CTAbuttons";
import Infointro from "./About/Infointro";
import ResponsiveSkillGrid from "./ResponsiveSkillGrid";
const Intro = () => {
  return (
    <div className="w-full flex justify-center items-center xl:mt-28 lg:mt-32 md:mt-24 sm:mt-16 mt-12 px-4 relative">
      <BgEffects />
      <div className="flex flex-col items-center xl:w-4/5 lg:w-4/5 md:w-full sm:w-full w-full relative z-10">
        <Infointro />
        <ResponsiveSkillGrid />
        <CTAbuttons />
      </div>
    </div>
  );
};

export default Intro;
