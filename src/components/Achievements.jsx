import { useState, useEffect } from 'react';
import { FaMapPin, FaCalendarAlt, FaUsers } from 'react-icons/fa';

export default function Achievements() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const achievements = [
        {
            title: 'AI Hackathon Winner 2024',
            university: 'Tech University',
            year: '2024',
            description: 'Won first place in the annual AI Hackathon competition. Built an innovative machine learning solution that uses computer vision to detect and classify environmental waste for recycling optimization.',
            images: ['./assets/work-1.png', './assets/work-2.png', './assets/work-3.png'],
            award: 'First Prize',
            teamSize: '4 members',
        },
        {
            title: 'Web Development Challenge 2023',
            university: 'Code Institute',
            year: '2023',
            description: 'Runner-up in the National Web Development Challenge. Created a responsive web application with real-time collaboration features and advanced data visualization using React and WebSockets.',
            images: ['./assets/work-2.png', './assets/work-3.png', './assets/work-4.png'],
            award: 'Second Prize',
            teamSize: '3 members',
        },
        {
            title: 'IoT Innovation Hackathon',
            university: 'Innovation Hub',
            year: '2023',
            description: 'Developed a smart IoT system for environmental monitoring. Built a complete ecosystem with ESP32 microcontrollers, cloud backend, and mobile app. Won Best Innovation Award.',
            images: ['./assets/work-3.png', './assets/work-4.png', './assets/work-1.png'],
            award: 'Best Innovation',
            teamSize: '2 members',
        },
        {
            title: 'Startup Sprint 2022',
            university: 'Entrepreneurship Center',
            year: '2022',
            description: 'Pitched a SaaS platform for digital marketing automation. Won the competition for best pitch and technical implementation. Secured mentorship from industry experts.',
            images: ['./assets/work-4.png', './assets/work-1.png', './assets/work-2.png'],
            award: 'Best Pitch',
            teamSize: '5 members',
        },
    ];

    const handleNextImage = () => {
        if (selectedAchievement && selectedAchievement.images) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedAchievement.images.length);
        }
    };

    const handlePrevImage = () => {
        if (selectedAchievement && selectedAchievement.images) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedAchievement.images.length) % selectedAchievement.images.length);
        }
    };

    const handleSelectAchievement = (achievement) => {
        setSelectedAchievement(achievement);
        setCurrentImageIndex(0);
    };

    const handleCloseModal = () => {
        setSelectedAchievement(null);
        setCurrentImageIndex(0);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedAchievement) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedAchievement]);

    return (
        <div id="achievements" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Accomplishments</h4>
            <h2 className="text-center text-5xl font-Ovo">Achievements</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Showcasing my competition wins and major accomplishments in hackathons and innovation challenges.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelectAchievement(achievement)}
                        className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg dark:hover:shadow-lg/25 transition duration-300 flex flex-col"
                    >
                        {/* Image Preview */}
                        <div className="relative bg-gray-300 dark:bg-gray-700 h-48 overflow-hidden">
                            <img
                                src={achievement.images[0]}
                                alt={achievement.title}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                            <div className="absolute top-3 right-3 bg-lime-500 dark:bg-lime-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                {achievement.award}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                    <FaMapPin className="text-lime-600 dark:text-lime-400" /> {achievement.university}
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                    <FaCalendarAlt className="text-lime-600 dark:text-lime-400" /> {achievement.year}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 flex-1">{achievement.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500 dark:text-gray-500">Click to view details</span>
                                <div className="border rounded-full border-gray-300 dark:border-gray-600 w-8 aspect-square flex items-center justify-center hover:bg-lime-300 transition">
                                    <img src="./assets/send-icon.png" alt="" className="w-4 dark:hidden" />
                                    <img src="./assets/send-icon.png" alt="" className="w-4 hidden dark:block dark:invert" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedAchievement && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
                    <div
                        className="bg-white dark:bg-darkTheme rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        {/* Image Slider */}
                        <div className="relative bg-gray-900 h-96 flex items-center justify-center overflow-hidden group">
                            {selectedAchievement.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${selectedAchievement.title} ${index + 1}`}
                                    className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {selectedAchievement.images.length > 1 && (
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
                                        {selectedAchievement.images.map((_, index) => (
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
                                        {currentImageIndex + 1} / {selectedAchievement.images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex items-start justify-between mb-2">
                                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{selectedAchievement.title}</h2>
                                <span className="bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 px-3 py-1 rounded-full text-sm font-semibold">
                                    {selectedAchievement.award}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                                <span className="flex items-center gap-2">
                                    <FaMapPin className="text-lime-600 dark:text-lime-400" /> {selectedAchievement.university}
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-lime-600 dark:text-lime-400" /> {selectedAchievement.year}
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaUsers className="text-lime-600 dark:text-lime-400" /> Team: {selectedAchievement.teamSize}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">About</h3>
                            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">{selectedAchievement.description}</p>

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
        </div>
    );
}
