import { FiStar } from "react-icons/fi";
import { PiPhone } from "react-icons/pi";

const ServicesHeader = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-col gap-6 sm:flex-col items-start justify-between mb-16">
      <div className="flex flex-col gap-12">
        <p className="flex items-center gap-3 text-gray-400">
          <FiStar className="text-yellow-500 text-2xl" />
          <span className="text-xl">My Services</span>
        </p>

        <a
          href="tel:+60176487917"
          aria-label="Call us"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2 group"
        >
          Schedule a call
          <PiPhone className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </a>
      </div>

      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Experience the Impact of User-Centered Design
        </h1>
        <p className="text-gray-400 text-lg">
          Experience the impact of user-centered design. I craft intuitive and
          engaging digital solutions that put users first and elevate brands.
        </p>
      </div>
    </div>
  );
};

export default ServicesHeader;
