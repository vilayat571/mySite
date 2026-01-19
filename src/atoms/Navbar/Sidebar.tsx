const Sidebar = () => {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">mike.</div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Let's Chat Button */}
          <button className="bg-zinc-800 hover:bg-zinc-700 text-gray-300 px-6 py-3 rounded-full font-medium transition flex items-center gap-2 group">
            Let's Chat
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </button>

          {/* Menu Button */}
          <button className="text-white hover:text-gray-300 transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
