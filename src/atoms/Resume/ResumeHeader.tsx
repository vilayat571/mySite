const ResumeHeader = () => {
  return (
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
  )
}

export default ResumeHeader
