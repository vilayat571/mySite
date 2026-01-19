import AchievementSection from "../atoms/Resume/AchievementSection";
import SkillSection from "../atoms/Resume/SkillSection";
import ResumeHeader from "../atoms/Resume/ResumeHeader";
import WorkHistory from "../atoms/Resume/WorkHistory";

export default function ResumePage() {
  return (
    <div
      id="resume"
      className="w-full flex items-center px-8 justify-between xl:mt-16 lg:mt-16 md:mt-16 sm:mt-16"
    >
      <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mx-auto">
        <ResumeHeader />
        <SkillSection />
        <AchievementSection />
        <WorkHistory />
      </div>
    </div>
  );
}
