
export default function Footer() {
  return (
    <footer className=" text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Content */}
        <div className="text-center">
          {/* Bye Text with Lines */}
          <div className="flex items-center justify-center gap-6 mb-3">
            <div className="h-px flex-1 max-w-xs bg-linear-to-r from-transparent via-gray-700 to-gray-700" />
            <h2 className="text-3xl md:text-4xl font-normal text-gray-300 tracking-wide">
              Bye
            </h2>
            <div className="h-px flex-1 max-w-xs bg-linear-to-l from-transparent via-gray-700 to-gray-700" />
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-base tracking-wide">Do Visit Again</p>
        </div>
      </div>
    </footer>
  );
}