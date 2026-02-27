import { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

export default function Work() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cardImageIndices, setCardImageIndices] = useState({});
    const [showAll, setShowAll] = useState(false);

    const work = [
        {
            name: 'Frontend project',
            description: 'Modern web design with React',
            category: 'Web Design',
            fullDescription: 'A comprehensive frontend project built with React and Tailwind CSS, featuring responsive design and smooth animations.',
            images: ['./assets/work-1.png', './assets/work-2.png'],
            technologies: ['React', 'Tailwind CSS', 'JavaScript'],
            slideInterval: 3000,
            link: '',
        },
        {
            name: 'Geo based app',
            description: 'Location-aware mobile application',
            category: 'Mobile App',
            fullDescription: 'A mobile application that leverages geolocation APIs to provide location-based services and recommendations.',
            images: ['./assets/work-2.png', './assets/work-1.png'],
            technologies: ['React Native', 'Geolocation API', 'Node.js'],
            slideInterval: 4000,
            link: '',
        },
        {
            name: 'Photography site',
            description: 'Portfolio website for photographers',
            category: 'Web Design',
            fullDescription: 'A stunning portfolio website designed for photographers to showcase their work with an elegant gallery and smooth navigation.',
            images: ['./assets/work-3.png', './assets/work-4.png'],
            technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
            slideInterval: 2500,
            link: '',
        },
        {
            name: 'UI/UX designing',
            description: 'User interface and experience design',
            category: 'UI/UX Design',
            fullDescription: 'Complete UI/UX design system including wireframes, prototypes, and high-fidelity mockups for web applications.',
            images: ['./assets/work-4.png', './assets/work-3.png'],
            technologies: ['Figma', 'Adobe XD', 'Prototyping'],
            slideInterval: 3500,
            link: '',
        },
        {
            name: 'E-Commerce Platform',
            description: 'Full-stack online shopping experience',
            category: 'Web Development',
            fullDescription: 'A complete e-commerce platform with product catalog, shopping cart, payment integration, and user management system.',
            images: ['./assets/work-1.png', './assets/work-3.png'],
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            slideInterval: 3200,
            link: '',
        },
        {
            name: 'Social Media Dashboard',
            description: 'Analytics and content management tool',
            category: 'Web Design',
            fullDescription: 'A comprehensive dashboard for managing social media accounts with real-time analytics, scheduling, and engagement metrics.',
            images: ['./assets/work-2.png', './assets/work-4.png'],
            technologies: ['React', 'Chart.js', 'Firebase', 'Tailwind CSS'],
            slideInterval: 2800,
            link: '',
        },
        {
            name: 'Mobile Learning App',
            description: 'Interactive educational platform',
            category: 'Mobile App',
            fullDescription: 'An innovative mobile learning application featuring interactive lessons, quizzes, progress tracking, and gamification elements.',
            images: ['./assets/work-3.png', './assets/work-1.png'],
            technologies: ['React Native', 'Redux', 'Firebase', 'JavaScript'],
            slideInterval: 3800,
            link: '',
        },
        {
            name: 'Real Estate Portal',
            description: 'Property listing and search platform',
            category: 'Web Design',
            fullDescription: 'A modern real estate platform with advanced filtering, virtual tours, mortgage calculator, and agent management system.',
            images: ['./assets/work-4.png', './assets/work-2.png'],
            technologies: ['React', 'Three.js', 'Node.js', 'PostgreSQL'],
            slideInterval: 3100,
            link: '',
        }
    ];

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

    // Auto-slide effect for each card
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
    }, [work]);

    // Prevent body scroll when modal is open
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
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
                {displayedProjects.map((project) => (
                    <div
                        key={project.name}
                        onClick={() => handleSelectProject(project)}
                        className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg dark:hover:shadow-lg/25 transition duration-300 flex flex-col"
                    >
                        {/* Image Slider */}
                        <div className="relative bg-gray-300 dark:bg-gray-700 h-40 overflow-hidden">
                            <LazyImage
                                src={project.images[cardImageIndices[project.name] || 0]}
                                alt={project.name}
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />
                            {project.images.length > 1 && (
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                    {project.images.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-1.5 h-1.5 rounded-full transition ${
                                                index === (cardImageIndices[project.name] || 0) ? 'bg-white' : 'bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
                            <span className="text-xs font-medium text-lime-600 dark:text-lime-400 mb-4">{project.category}</span>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-xs text-gray-500 dark:text-gray-500">Click to view details</span>
                                <div className="border rounded-full border-gray-300 dark:border-gray-600 w-8 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition">
                                    <LazyImage src="./assets/send-icon.png" alt="" className="w-4 dark:hidden" />
                                    <LazyImage src="./assets/send-icon.png" alt="" className="w-4 hidden dark:block dark:invert" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
                    <div
                        className="bg-white dark:bg-darkTheme rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        {/* Image Slider */}
                        <div className="relative bg-gray-900 h-96 flex items-center justify-center overflow-hidden group">
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

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {selectedProject.images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
                                    >
                                        <span className="text-2xl text-white font-bold">‹</span>
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
                                    >
                                        <span className="text-2xl text-white font-bold">›</span>
                                    </button>

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                                        {selectedProject.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`transition-all duration-300 rounded-full ${
                                                    index === currentImageIndex
                                                        ? 'bg-lime-400 w-3 h-3'
                                                        : 'bg-white/50 hover:bg-white/80 w-2 h-2'
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    <div className="absolute top-4 right-4 text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                                        {currentImageIndex + 1} / {selectedProject.images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">{selectedProject.name}</h2>
                            <p className="text-sm font-medium text-lime-600 dark:text-lime-400 mb-4">{selectedProject.category}</p>

                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">About</h3>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">{selectedProject.fullDescription}</p>

                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={handleCloseModal}
                                className="w-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-2 px-4 rounded-lg transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {!showAll && (
                <button onClick={() => setShowAll(true)} className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                    Show more
                    <LazyImage src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                    <LazyImage src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
                </button>
            )}
            {showAll && (
                <button onClick={() => setShowAll(false)} className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                    Show less
                    <LazyImage src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden rotate-180" />
                    <LazyImage src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block rotate-180" />
                </button>
            )}

        </div>
    )
}