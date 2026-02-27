import LazyImage from './LazyImage'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Learning Management System",
      description: "Scalable LMS serving thousands of students with real-time features, progress tracking, and interactive content delivery.",
      image: "./assets/work-1.png",
      link: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and multi-vendor support.",
      image: "./assets/work-2.png",
      link: "#",
    },
    {
      id: 3,
      title: "Industrial IoT Dashboard",
      description: "Real-time monitoring system for factory operations with data visualization, alerts, and predictive analytics.",
      image: "./assets/work-3.png",
      link: "#",
    },
    {
      id: 4,
      title: "AI-Powered Analytics",
      description: "Machine learning pipeline for data analysis with automated insights and predictive modeling capabilities.",
      image: "./assets/work-4.png",
      link: "#",
    },
  ];

  const handleProjectClick = (link) => {
    if (link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="mb-16">
        <h4 className="text-center mb-2 text-lg font-Ovo">Featured Work</h4>
        <h2 className="text-center text-5xl font-Ramishka mb-4">My Projects</h2>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 font-Ovo max-w-2xl mx-auto">
          Explore my recent projects showcasing full-stack development, system architecture, and real-world problem solving
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-white dark:bg-slate-800 shadow-lg transition-all duration-500"
            onClick={() => handleProjectClick(project.link)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 overflow-hidden"
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>
            </div>

            {/* Content - Normal State */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 group-hover:translate-y-full">
              <h3 className="text-2xl font-Ramishka text-white mb-2">{project.title}</h3>
              <p className="text-slate-200 font-Ovo text-sm line-clamp-2">{project.description}</p>
            </div>

            {/* Content - Hover State (Tab effect) */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transform transition-all duration-500"
              style={{
                transformOrigin: "center",
                opacity: 0,
                transform: "perspective(1200px) rotateY(25deg) rotateX(-10deg) translateZ(50px) scale(0.9)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform =
                  "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.style.transform =
                  "perspective(1200px) rotateY(25deg) rotateX(-10deg) translateZ(50px) scale(0.9)";
              }}
            >
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-Ramishka text-white">{project.title}</h3>
                <p className="text-slate-300 font-Ovo text-sm max-w-xs">{project.description}</p>
                <div className="flex items-center justify-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                  <span className="text-sm font-Ovo">Click to open</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Corner Tab Effect */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-gray-500 dark:border-t-gray-600 group-hover:border-t-gray-400 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <a
          href="#work"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-3 px-8 duration-300 dark:text-white font-Ovo hover:shadow-lg transition-all"
        >
          View all projects
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
