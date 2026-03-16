import LazyImage from './LazyImage'

export default function Projects() {
  const projects = [
  {
    id: 1,
    title: "Nivra LMS – SaaS Learning Management System",
    description:
      "Full-stack SaaS LMS serving 7,000+ active users across two live client platforms (ewinners.lk, alguidance.lk). Built with Node.js, React, and React Native, featuring client management, mobile app, and end-to-end production deployment on DigitalOcean.",
    image: "./assets/work-1.png",
    link: "https://ewinners.lk",
  },
  {
    id: 2,
    title: "Entrack – IoT Smart Power Monitoring System",
    description:
      "Industrial IoT power monitoring platform built with microservices architecture using Spring Boot, React, PostgreSQL, and Apache Kafka. Designed complete backend architecture and RESTful APIs; currently live in first production phase with real-world industrial deployment.",
    image: "./assets/work-2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Fast EMI Prediction – Physics-Aware Generative AI",
    description:
      "Globally shortlisted at IEEE IES Generative AI Challenge 2026 (top teams from 575 entries across 57 countries). Researching a physics-informed generative AI surrogate model to replace expensive electromagnetic simulations for real-time EMI risk prediction in PCB layouts.",
    image: "./assets/work-3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Nivra Power – AI-Powered NILM Energy Disaggregation",
    description:
      "AI-powered Non-Intrusive Load Monitoring system that disaggregates appliance-level energy consumption from a single factory-wide IoT sensor. Features ML-based load classification, real-time inference, and live monitoring dashboards for industrial clients.",
    image: "./assets/work-4.png",
    link: "#",
  },
  {
    id: 5,
    title: "SerenGuard – Maritime Anomaly Detection System",
    description:
      "Academic maritime surveillance platform detecting suspicious vessel behavior in Sri Lankan waters using real AIS tracking data. Built ML classification models on spatio-temporal trajectory features, with PostGIS for geospatial queries and real-time alerting.",
    image: "./assets/work-5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Nivra-e – E-Commerce SaaS Platform",
    description:
      "Full-stack e-commerce platform built for a medical equipment client, live at medtools.lk, serving healthcare students and professionals nationwide. Handled backend architecture, frontend logic, and production deployment with Node.js, React, MySQL, and Nginx.",
    image: "./assets/work-6.png",
    link: "https://medtools.lk",
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
        {projects.map((project) => {
          const hasLink = project.link !== "#";

          return (
          <div
            key={project.id}
            className={`group relative h-80 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg transition-all duration-500 ${hasLink ? "cursor-pointer" : "cursor-default"}`}
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
                <div className={`flex items-center justify-center gap-2 transition-colors ${hasLink ? "text-lime-300 group-hover:text-lime-200" : "text-slate-400"}`}>
                  <span className={`text-sm font-Ovo ${hasLink ? "underline underline-offset-4 decoration-2" : ""}`}>
                    {hasLink ? "Open Live Project" : "Live link unavailable"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${hasLink ? "group-hover:translate-x-1" : "opacity-60"}`}
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
        )})}
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
