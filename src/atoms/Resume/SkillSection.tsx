import { skills } from "../../data/resume";

const SkillSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-gray-400 mb-6">
        Here are the frameworks, libraries, services and runtimes I have
        experience with. This is not a complete list! I'm constantly gaining new
        skills, and hence it can be a little bit outdated.
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 bg-[#1a1f2e] px-4 py-2 rounded-lg hover:bg-[#242938] transition"
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSection;
