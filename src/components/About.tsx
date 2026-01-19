import BgGradient from "../atoms/About/BgGradient";
import AboutIntro from "../atoms/About/AboutIntro";
import EducationBar from "../atoms/About/EducationBar";
import StatsBar from "../atoms/About/StatsBar";

export default function About() {
  return (
    <div
      id="about"
      className="w-full flex xl:mt-28 lg:mt-28 md:mt-20 sm:mt-16 mt-12 justify-center px-4 relative"
    >
      <BgGradient />
      <div className="flex flex-col items-center xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative z-10">
        <AboutIntro />
        <EducationBar />
        <StatsBar />
      </div>
    </div>
  );
}
