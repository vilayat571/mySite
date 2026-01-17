import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiRedux, SiTailwindcss,
  SiRadixui, SiVuedotjs, SiNuxtdotjs, SiAstro, SiNodedotjs, SiBun,
  SiCloudflare, SiPostgresql, SiMongodb, SiRedis, SiSupabase, SiFastify,
  SiHono, SiVite, SiTurborepo, SiDocker, SiGit, SiGithub, SiSanity,
  SiChatbot, SiMapbox, SiFigma
} from 'react-icons/si';
import { FaDownload } from 'react-icons/fa';

export default function ResumePage() {
  const skills = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'Typescript', icon: SiTypescript },
    { name: 'Javascript', icon: SiJavascript },
    { name: 'Zustand', icon: SiReact },
    { name: 'Redux', icon: SiRedux },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'shadcn/ui', icon: SiRadixui },
    { name: 'Radix', icon: SiRadixui },
    { name: 'Vue', icon: SiVuedotjs },
    { name: 'Nuxt', icon: SiNuxtdotjs },
    { name: 'Astro', icon: SiAstro },
    { name: 'Node', icon: SiNodedotjs },
    { name: 'Bun', icon: SiBun },
    { name: 'Workers', icon: SiCloudflare },
    { name: 'Postgres', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Redis', icon: SiRedis },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Fastify', icon: SiFastify },
    { name: 'Hono', icon: SiHono },
    { name: 'Vite', icon: SiVite },
    { name: 'Turborepo', icon: SiTurborepo },
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Sanity', icon: SiSanity },
    { name: 'ChatGPT', icon: SiChatbot },
    { name: 'AG Grid', icon: SiReact },
    { name: 'Mapbox', icon: SiMapbox },
    { name: 'Figma', icon: SiFigma },
  ];

  const jobs = [
    {
      title: 'Career Break - Professional Development',
      company: 'Self-Study',
      flag: '🇲🇾',
      location: 'Kuala Lumpur, Malaysia',
      type: '',
      period: 'Oct 2025 - Present',
      responsibilities: [
        'Focused on advancing full-stack development skills and learning cutting-edge technologies.',
        'Building personal projects to strengthen expertise in modern web frameworks.',
        'Staying current with industry trends and best practices in software development.',
      ],
    },
    {
      title: 'JavaScript Developer Intern',
      company: 'Andersen Lab',
      flag: '🇲🇾',
      location: 'Kuala Lumpur, Malaysia',
      type: 'Internship',
      period: 'Jul 2025 - Aug 2025',
      responsibilities: [
        'Gained hands-on experience with JavaScript development in a professional environment.',
        'Collaborated with senior developers on real-world projects.',
        'Contributed to codebase improvements and learned industry best practices.',
      ],
    },
    {
      title: 'Strong Junior Web Developer',
      company: 'AVIAN Group Co.',
      flag: '🇦🇿',
      location: 'Azerbaijan',
      type: 'Part-Time (Hybrid)',
      period: 'Mar 2025 - Jul 2025',
      responsibilities: [
        'Developed a full-stack web application using Next.js, Tailwind CSS, and TypeScript for responsive frontend.',
        'Built scalable backend with MERN stack (MongoDB, Express.js, Node.js).',
        'Designed UI/UX in Figma, delivering customized, high-performance solutions.',
        'Ensured code maintainability and optimal performance across the application.',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Freelance Web Development',
      flag: '🇦🇿',
      location: 'Baku, Azerbaijan',
      type: 'Part-Time',
      period: 'Jul 2024 - Apr 2025',
      responsibilities: [
        'Delivered modern, responsive websites and admin dashboards using React, TypeScript, and MongoDB.',
        'Deployed applications with Nginx and Cloudflare for optimal performance.',
        'Served key clients including AzeSERT, Raja Restaurants, Interviewsland, Aqsa News, SER, Güvən Finans, and Chaykoff.',
        'Implemented REST APIs with JWT authentication for secure, scalable solutions.',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'Pilgrim Education MMC',
      flag: '🇦🇿',
      location: 'Baku, Azerbaijan',
      type: 'Part-Time (Remote)',
      period: 'May 2024 - Jan 2025',
      responsibilities: [
        'Built full-stack web application with React.js, Tailwind CSS, and TypeScript frontend.',
        'Developed backend using MERN stack with Express.js and MongoDB.',
        'Designed user interfaces in Figma for optimal user experience.',
        'Implemented JWT authentication and created scalable, efficient solutions.',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Kodaze',
      flag: '🇦🇿',
      location: 'Baku, Azerbaijan',
      type: 'Internship',
      period: 'Nov 2021 - May 2022',
      responsibilities: [
        'Built programs based on customer requirements and business needs.',
        'Set up CRM systems for companies to streamline operations.',
        'Contributed to open-source projects like Saleor.',
        'Continuously learned new technologies including Next.js, React.js, and REST APIs.',
      ],
    },
  ];

  return (
  <div className="w-full flex items-center px-8 justify-between xl:mt-56 lg:mt-56 md:mt-36 sm:mt-36">
      <div className="xl:w-3/4 lg:w-3/4 md:w-full sm:w-full mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6">My Experience:</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            I'm a highly skilled full-stack engineer with more than 8 years of
            experience in building web applications. On this page, you can learn
            more about my knowledge stack and my previous work experience.
          </p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full ${
                  i === 0 ? 'w-8 bg-yellow-500' : 'w-3 bg-yellow-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 mb-6">
            Here are the frameworks, libraries, services and runtimes I have experience
            with. This is not a complete list! I'm constantly gaining new skills, and hence it
            can be a little bit outdated.
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

        {/* Work History */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Work History</h2>
          <p className="text-gray-400 mb-8">
            Below you will find a summary of my past employment experience.
            Additionally, if you require, you can{' '}
            <a href="/resume.pdf" className="text-white underline hover:text-gray-300">
              download my resume <FaDownload className="inline w-3 h-3" />
            </a>
          </p>

          {/* Timeline */}
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-700">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full" />
                
                <div className="mb-2">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <div className="flex items-center gap-3 text-gray-400 text-sm mb-1">
                    <span className="font-semibold text-white">{job.company}</span>
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