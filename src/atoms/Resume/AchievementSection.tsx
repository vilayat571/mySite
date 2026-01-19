import { education, languages } from "../../data/resume";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";

const AchievementSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Education & Achievements</h2>
      <p className="text-gray-400 mb-8">
        My academic background and language proficiency certifications.
      </p>

      {/* Education */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FaGraduationCap className="text-yellow-500" />
          Academic Achievements
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] flex justify-between items-center border border-gray-800 cursor-pointer p-5 rounded-lg hover:bg-black transition-colors"
            >
              {/* Institution */}
              <div>
                <h4 className="text-lg font-semibold">{edu.institution}</h4>
              </div>

              {/* Score */}
              <div className="text-right">
                <span className="text-yellow-500 font-bold text-lg">
                  {edu.score}
                </span>
                <p className="text-xs text-gray-500">Overall Score</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language Proficiency */}
      <div>
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FaLanguage className="text-yellow-500" />
          Language Proficiency
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-gray-800  p-5 rounded-lg hover:bg-[#000000] transition"
            >
              <h4 className="text-lg font-semibold mb-3">{lang.name}</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{lang.total}</span>
                <span className="text-yellow-500 font-bold text-xl">
                  {lang.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
