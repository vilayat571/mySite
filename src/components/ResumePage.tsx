import { FaDownload, FaGraduationCap, FaLanguage } from "react-icons/fa";
import { jobs, skills } from "../data/resume";

export default function ResumePage() {
  const education = [
    {
      institution: "WCU",
      score: "75 / 100",
    },
    {
      institution: "Admision Score",
      score: "601 / 700",
    },
    {
      institution: "ASOIU",
      score: "81 / 100",
    },
  ];

  const languages = [
    {
      name: "IELTS",
      score: "6.5",
      total: "Overall Band Score",
    },
    {
      name: "Cambridge Linguaskill",
      score: "171 / 200",
      total: "Business English",
    },
  ];

  return (
    <div
      id="resume"
      className="w-full flex items-center px-8 justify-between xl:mt-16 lg:mt-16 md:mt-16 sm:mt-16"
    >
      <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">Resume:</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Software Developer with more than 2 years of experience in building
            web applications. On this page, you can learn more about my
            knowledge stack and my previous work experience.
          </p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full ${
                  i === 0 ? "w-8 bg-yellow-500" : "w-3 bg-yellow-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 mb-6">
            Here are the frameworks, libraries, services and runtimes I have
            experience with. This is not a complete list! I'm constantly gaining
            new skills, and hence it can be a little bit outdated.
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

        {/* Education & Achievements Section */}
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

        {/* Work History */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Work History</h2>
          <p className="text-gray-400 mb-8">
            Below you will find a summary of my past employment experience.
            Additionally, if you require, you can{" "}
            <a
              href="/resume.pdf"
              className="text-white underline hover:text-gray-300"
            >
              download my resume <FaDownload className="inline w-3 h-3" />
            </a>
          </p>

          {/* Timeline */}
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-gray-700"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full" />

                <div className="mb-2">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <div className="flex items-center gap-3 text-gray-400 text-sm mb-1">
                    <span className="font-semibold text-white">
                      {job.company}
                    </span>
                    <span>{job.flag}</span>
                    <span>{job.location}</span>
                    {job.type && (
                      <>
                        <span>•</span>
                        <span>{job.type}</span>
                      </>
                    )}
                  </div>
                  <div className="text-gray-500 text-sm mb-4">{job.period}</div>
                </div>

                <ul className="space-y-2 text-gray-400">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gray-600">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
