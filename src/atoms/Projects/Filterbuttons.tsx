const Filterbuttons = ({
  filters,
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
  filters: {
    id: string;
    label: string;
    count: number;
  }[];
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-3 rounded-xl cursor-pointer font-medium transition ${
            activeFilter === filter.id
              ? "bg-yellow-500 text-black"
              : "bg-[#0a0a0a] text-gray-300 border border-gray-800 hover:border-gray-700"
          }`}
        >
          {filter.label}
          <span className="ml-2 text-sm opacity-70">({filter.count})</span>
        </button>
      ))}
    </div>
  );
};

export default Filterbuttons;
