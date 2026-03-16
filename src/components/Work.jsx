import { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

const work = [
  {
    name: 'Nivra LMS',
    description: 'SaaS Learning Management System for 7,000+ users',
    category: 'Web Development',
    fullDescription: 'Full-stack SaaS LMS serving 7,000+ active users across two live client platforms (ewinners.lk, alguidance.lk). Architected and deployed end-to-end including backend, frontend, client management, and a companion mobile app on DigitalOcean.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773644144/alguidence_ymfaoo.jpg', 'https://res.cloudinary.com/duiyr5sr0/image/upload/v1773647525/e56b24f4-42e5-45ae-8c22-f8082f83a592.png', 'https://res.cloudinary.com/duiyr5sr0/image/upload/v1773645106/4c637128-714b-4d1a-80a4-e873bf4e73ad.png'],
    technologies: ['Node.js', 'Express.js', 'React.js', 'React Native', 'MySQL', 'Firebase', 'DigitalOcean'],
    slideInterval: 3000,
    link: 'https://ewinners.lk',
  },
  {
    name: 'Entrack IoT',
    description: 'Industrial IoT smart power monitoring platform',
    category: 'Web Development',
    fullDescription: 'Industrial IoT power monitoring platform built with microservices architecture. Designed the complete backend, all RESTful APIs, and led a cross-functional team. Currently live in first production phase with real-world industrial deployment.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773643139/1_he1meo.png', './assets/work-3.png'],
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Apache Kafka', 'Microservices'],
    slideInterval: 3200,
    link: '',
  },
  {
    name: 'IEEE EMI Prediction',
    description: 'Physics-aware generative AI for PCB EMI prediction',
    category: 'AI / ML',
    fullDescription: 'Globally shortlisted at IEEE IES Generative AI Challenge 2026 — top teams from 575 submissions across 57 countries. Researching a physics-informed generative AI surrogate model to replace expensive electromagnetic simulations for real-time EMI risk prediction in PCB layouts.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773681019/download_2_vtytrd.png'],
    technologies: ['Python', 'Generative AI', 'Physics-Aware Modeling', 'Deep Learning'],
    slideInterval: 3500,
    link: '',
  },
  {
    name: 'Nivra Power',
    description: 'AI-powered NILM energy disaggregation system',
    category: 'AI / ML',
    fullDescription: 'AI-powered Non-Intrusive Load Monitoring (NILM) system that disaggregates appliance-level energy consumption from a single factory-wide IoT sensor. Features end-to-end ML pipeline, real-time inference, and live monitoring dashboards for industrial clients.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773682496/Untitled_yh2med.png', 'https://res.cloudinary.com/duiyr5sr0/image/upload/v1773682103/1769262599673_nsbs1i.jpg'],
    technologies: ['Python', 'Machine Learning', 'TimescaleDB', 'InfluxDB', 'IoT', 'Spring Boot'],
    slideInterval: 2800,
    link: '',
  },
  {
    name: 'SerenGuard',
    description: 'Maritime vessel anomaly detection system',
    category: 'AI / ML',
    fullDescription: 'Maritime surveillance platform detecting suspicious vessel behavior in Sri Lankan waters using real AIS tracking data. Built spatio-temporal feature engineering pipelines, ML classification models, and integrated PostGIS for geospatial queries and real-time alerting.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773684149/dd862dec-f80c-46b9-ba00-80b58e306022.png', 'https://res.cloudinary.com/duiyr5sr0/image/upload/v1773683455/fd208464-f0e9-45c4-8625-701330c31c61.png'],
    technologies: ['Python', 'Scikit-learn', 'AIS Data', 'PostGIS', 'REST API'],
    slideInterval: 3000,
    link: '',
  },
  {
    name: 'Nivra-e',
    description: 'E-commerce SaaS platform for medical equipment',
    category: 'Web Development',
    fullDescription: 'Full-stack e-commerce SaaS platform for a medical equipment client, live at medtools.lk, serving healthcare students and professionals nationwide. Handled backend architecture, frontend logic, client management, and full production deployment.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773682693/d1b1956a-5e95-4807-95ec-b9b31606f01d.png'],
    technologies: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'Nginx', 'DigitalOcean'],
    slideInterval: 3200,
    link: 'https://medtools.lk',
  },
  {
    name: 'Mega Drone Swarm',
    description: 'Autonomous 10-drone swarm system at Rextro 2025',
    category: 'Embedded Systems',
    fullDescription: 'Led firmware development for a 10-drone swarm system showcased at Rextro 2025, managing a 20-member team across hardware and software tracks. Handled PID tuning, firmware optimization, telemetry integration, and swarm coordination.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773684386/1766505812515_tejwsi.jpg', 'https://res.cloudinary.com/duiyr5sr0/image/upload/v1773684383/1766505820918_lr0agd.jpg', 'https://res.cloudinary.com/duiyr5sr0/image/upload/v1773684558/1766505822144_1_tftizh.jpg'],
    technologies: ['ArduPilot', 'LibrePilot', 'PID Tuning', 'Telemetry', 'Firmware'],
    slideInterval: 3800,
    link: '',
  },
  {
    name: 'Faculty Complaint System',
    description: 'Role-based complaint and issue tracking system',
    category: 'Web Development',
    fullDescription: 'Role-based complaint management and issue-tracking system built for the Faculty of Engineering, University of Ruhuna. Currently in active production use across the faculty.',
    images: ['https://res.cloudinary.com/duiyr5sr0/image/upload/v1773684866/b80a6f0d-2340-49ca-8dd2-f6ac931e7a02.png'],
    technologies: ['Node.js', 'React', 'PostgreSQL', 'REST API'],
    slideInterval: 3000,
    link: '',
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState({});
  const [showAll, setShowAll] = useState(false);

  const urlPattern = /((?:https?:\/\/)?(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s),]*)?)/gi;

  const renderTextWithLinks = (text) => {
    const matches = [...text.matchAll(urlPattern)];

    if (!matches.length) {
      return text;
    }

    const parts = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      const value = match[0];
      const start = match.index || 0;
      const end = start + value.length;
      const href = value.startsWith('http') ? value : `https://${value}`;

      if (start > lastIndex) {
        parts.push(text.slice(lastIndex, start));
      }

      parts.push(
        <a
          key={`${value}-${index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-sky-600 dark:text-sky-400 underline underline-offset-4 decoration-2 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );

      lastIndex = end;
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const displayedProjects = showAll ? work : work.slice(0, 4);

  const handleNextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const intervals = work.map((project) => {
      return setInterval(() => {
        setCardImageIndices((prev) => ({
          ...prev,
          [project.name]: ((prev[project.name] || 0) + 1) % project.images.length,
        }));
      }, project.slideInterval);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="section-wrap">
      <p className="section-kicker">My portfolio</p>
      <h2 className="section-title">My latest works</h2>
      <p className="section-subtitle">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {displayedProjects.map((project) => (
          <article
            key={project.name}
            onClick={() => handleSelectProject(project)}
            className="glass-panel group rounded-2xl overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1"
          >
            <div className="relative bg-slate-300 dark:bg-slate-700 h-44 overflow-hidden">
              <LazyImage
                src={project.images[cardImageIndices[project.name] || 0]}
                alt={project.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              {project.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition ${
                        index === (cardImageIndices[project.name] || 0) ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{project.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{project.description}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-400 mb-4">{project.category}</span>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Click to view details</span>
                <div className="rounded-full border border-slate-300 dark:border-slate-600 w-8 aspect-square flex items-center justify-center bg-white/80 dark:bg-slate-900/70">
                  <LazyImage src="./assets/send-icon.png" alt="" className="w-4 dark:hidden" />
                  <LazyImage src="./assets/send-icon.png" alt="" className="w-4 hidden dark:block dark:invert" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
          <div
            className="glass-panel-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 h-80 md:h-96 flex items-center justify-center overflow-hidden group">
              {selectedProject.images.map((image, index) => (
                <LazyImage
                  key={index}
                  src={image}
                  alt={`${selectedProject.name} ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/40 backdrop-blur rounded-full w-10 h-10 transition z-10 text-white"
                  >
                    <span className="text-xl font-bold">�</span>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/40 backdrop-blur rounded-full w-10 h-10 transition z-10 text-white"
                  >
                    <span className="text-xl font-bold">�</span>
                  </button>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/35 backdrop-blur px-4 py-2 rounded-full">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentImageIndex ? 'bg-sky-400 w-3 h-3' : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 text-white text-xs font-semibold bg-black/45 backdrop-blur px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{selectedProject.name}</h2>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-400 mb-4">{selectedProject.category}</p>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-2">About</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{renderTextWithLinks(selectedProject.fullDescription)}</p>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 font-medium hover:bg-sky-200 dark:hover:bg-sky-900/50 transition-colors"
                >
                  Visit live project
                  <span aria-hidden="true">?</span>
                </a>
              )}

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={handleCloseModal}
                className="w-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium py-2.5 px-4 rounded-xl transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {!showAll && (
        <button onClick={() => setShowAll(true)} className="mt-12 w-max flex items-center justify-center gap-2 text-slate-700 border border-slate-300 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/10 rounded-full py-3 px-8 mx-auto duration-300 dark:text-white">
          Show more
          <LazyImage src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
          <LazyImage src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
        </button>
      )}
      {showAll && (
        <button onClick={() => setShowAll(false)} className="mt-12 w-max flex items-center justify-center gap-2 text-slate-700 border border-slate-300 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/10 rounded-full py-3 px-8 mx-auto duration-300 dark:text-white">
          Show less
          <LazyImage src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden rotate-180" />
          <LazyImage src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block rotate-180" />
        </button>
      )}
    </section>
  )
}
