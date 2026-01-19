import { useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FiStar } from "react-icons/fi";
import { services } from "../data/services";
import "../assets/styles/services.css";
export default function Services() {

type Service = {
  id: number;
  title: string;
};

const [expandedService, setExpandedService] = useState<Service["id"] | null>(null);

const toggleService = (id: Service["id"]) => {
  setExpandedService(expandedService === id ? null : id);
};

  return (
    <div id="services" className="w-full flex items-center px-8 justify-between xl:mt-56 lg:mt-56 md:mt-36 sm:mt-36">
      <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mx-auto">
        {/* Header */}
        <div className="flex xl:flex-row lg:flex-row md:flex-col gap-6 sm:flex-col items-start justify-between mb-16">
          <div className="flex flex-col justify-between h-60 items-start">
            <p className="flex items-center gap-3 text-gray-400">
              <FiStar className="text-yellow-500 text-2xl" />
              <span className="text-xl">My Services</span>
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2 group">
              Start a Project Now
              <HiOutlineArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </button>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Experience the Impact of User-Centered Design
            </h1>
            <p className="text-gray-400 text-lg">
              Experience the impact of user-centered design. I craft intuitive
              and engaging digital solutions that put users first and elevate
              brands.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-[#000000] border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-gray-700 transition-all duration-300 group ${
                expandedService === service.id
                  ? "min-h-100 sm:min-h-112.5 md:min-h-125"
                  : ""
              }`}
            >
              {expandedService === service.id ? (
                // Expanded Service Card with Details
                <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8">
                  <div className="flex-1 w-full lg:pr-8">
                    <p className="text-gray-500 text-sm mb-2">
                      {service.subtitle}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 animate-fadeIn"
                        >
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0" />
                          <span className="text-gray-300 text-xs md:text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock Device Image */}
                  <div className="relative animate-slideIn w-full lg:w-auto flex justify-center lg:justify-end">
                    <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
                      {/* Card Background */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${service.gradient} rounded-3xl transform rotate-6 shadow-2xl`}
                      />

                      {/* Phone Mockup */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-48 sm:w-28 sm:h-56 md:w-32 md:h-64 bg-black rounded-3xl border-2 md:border-4 border-gray-800 flex items-center justify-center shadow-xl z-10">
                        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                          {service.mockupLetter}
                        </span>
                      </div>

                      {/* Tablet Mockup */}
                      <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-44 sm:w-36 sm:h-52 md:w-40 md:h-56 bg-gray-900 rounded-2xl border-2 md:border-4 border-gray-700 shadow-lg" />

                      {/* Arrow Button */}
                      <button
                        onClick={() => toggleService(service.id)}
                        className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition shadow-lg z-20 cursor-pointer"
                      >
                        <HiOutlineArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black transform rotate-180 cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Collapsed Service Card
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">
                      {service.subtitle}
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      {service.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition group-hover:bg-yellow-500 cursor-pointer shrink-0"
                  >
                    <HiOutlineArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition cursor-pointer" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
