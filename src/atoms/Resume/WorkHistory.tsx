import { jobs } from '../../data/resume'
import { FaDownload } from 'react-icons/fa'

const WorkHistory = () => {
  return (
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
  )
}

export default WorkHistory
