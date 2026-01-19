import { FaGraduationCap, FaCode, FaGlobe } from "react-icons/fa";
const EducationBar = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Education Card */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition">
            <FaGraduationCap className="text-blue-500 w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Education</h3>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-gray-300">
            Azerbaijan State Oil and Industry Management:
            <br />
            Information Technology Bachelor's
          </p>
          <p className="text-gray-300">
            Western Caspian University(2024-2025):
            <br />
            Computer Engineering Master's
          </p>
          <p className="text-yellow-500 font-semibold mt-3">
            IT Industry Management(present):
            <br />
            Institut Kemahiran Baitulmal Diploma's
          </p>
        </div>
      </div>

      {/* Expertise Card */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition">
            <FaCode className="text-green-500 w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Expertise</h3>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-gray-300">React, Next.js, </p>
          <p className="text-gray-300">Javascript, TypeScript</p>
          <p className="text-gray-300">MongoDB, Express.js</p>
          <p className="text-yellow-500 font-semibold mt-3">
            Software Development & UI/UX
          </p>
        </div>
      </div>

      {/* Languages Card */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 hover:border-yellow-500/50 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition">
            <FaGlobe className="text-purple-500 w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Languages</h3>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-gray-300">Azerbaijani • Turkish</p>
          <p className="text-gray-300">English • Malay • Indonesian</p>
          <p className="text-yellow-500 font-semibold mt-3">Multilingual</p>
        </div>
      </div>
    </div>
  );
};

export default EducationBar;
