import { useState, useEffect } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react";
import LazyImage from "./LazyImage";

const achievements = [
  {
    title: "CodeX 2025",
    university: "University of Moratuwa",
    year: "2024",
    description:
      "Won 1st Place in the GitHub Pull Request Competition (May 2025) by rapidly identifying bugs, resolving errors, and submitting fixes within a strict time limit",
    images: [
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773686616/1748988605883_vemupw.jpg",
    ],
    award: "First Prize",
    teamSize: "3 members",
  },
  {
    title: "Algothon 2025",
    university: "SLIIT",
    year: "2025",
    description:
      "Achieved 2nd Runner-Up in an AI-Restricted Hackathon on HackerRank, competing in time-limited programming challenges where AI assistance was restricted.",
    images: [
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773686845/1757529147598_tpe589.jpg",
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773686844/1757529147514_rcgnmj.jpg",
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773686843/1757529147593_s5qcxx.jpg",
    ],
    award: "3RD PLACE",
    teamSize: "3 members",
  },
  {
    title: "CodeRally",
    university: "IIT",
    year: "2025",
    description:
      "Won 2nd Runner-Up at the 24-Hour HackerRank Hackathon, competing in an intensive time-limited coding competition.",
    images: [
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773687048/1757832178798_k3lvny.jpg",
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773687438/Untitled_gmszlo.png",
    ],
    award: "3RD PLACE",
    teamSize: "5 members",
  },
  {
    title: "BITCODE 2024",
    university: "RUSL",
    year: "2025",
    description:
      "Won 3rd Place in a Project-Based Competition by developing a solution based on given requirements within a limited time.",
    images: [
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773687623/1743537707133_pu0bcb.jpg",
    ],
    award: "3rd Place",
    teamSize: "3 members",
  },
  {
    title: "CODE NIGHT",
    university: "University of Ruhuna",
    year: "2025",
    description:
      "Won 3rd Place in a Project-Based Competition, applying the Software Development Life Cycle (SDLC) to design and develop a solution based on given requirements within a limited timeframe.",
    images: [
      "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773689618/892e6017-abdd-4506-b51d-0d02a64d3604.png", "https://res.cloudinary.com/duiyr5sr0/image/upload/v1773689727/1758290659186_y7hzu3.jpg"
    ],
    award: "3rd Place",
    teamSize: "3 members",
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (selectedAchievement && selectedAchievement.images) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedAchievement.images.length,
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedAchievement && selectedAchievement.images) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedAchievement.images.length) %
          selectedAchievement.images.length,
      );
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

  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedAchievement]);

  return (
    <section id="achievements" className="section-wrap">
      <p className="section-kicker">My Accomplishments</p>
      <h2 className="section-title">Achievements</h2>
      <p className="section-subtitle">
        Showcasing my competition wins and major accomplishments in hackathons
        and innovation challenges.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <article
            key={index}
            onClick={() => handleSelectAchievement(achievement)}
            className="glass-panel group rounded-2xl overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1"
          >
            <div className="relative bg-slate-300 dark:bg-slate-700 h-52 overflow-hidden">
              <LazyImage
                src={achievement.images[0]}
                alt={achievement.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute top-3 right-3 bg-slate-950/85 dark:bg-white/85 text-white dark:text-slate-900 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em]">
                {achievement.award}
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {achievement.title}
              </h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  {achievement.university}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  {achievement.year}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 flex-1">
                {achievement.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Click to view details
                </span>
                <div className="rounded-full border border-slate-300 dark:border-slate-600 w-8 aspect-square flex items-center justify-center bg-white/80 dark:bg-slate-900/70">
                  <LazyImage
                    src="./assets/send-icon.png"
                    alt=""
                    className="w-4 dark:hidden"
                  />
                  <LazyImage
                    src="./assets/send-icon.png"
                    alt=""
                    className="w-4 hidden dark:block dark:invert"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedAchievement && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="glass-panel-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 h-80 md:h-96 flex items-center justify-center overflow-hidden group">
              {selectedAchievement.images.map((image, index) => (
                <LazyImage
                  key={index}
                  src={image}
                  alt={`${selectedAchievement.title} ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

              {selectedAchievement.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/40 backdrop-blur rounded-full w-10 h-10 transition z-10 text-white"
                  >
                    <ChevronLeft className="w-5 h-5 mx-auto" aria-hidden="true" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/40 backdrop-blur rounded-full w-10 h-10 transition z-10 text-white"
                  >
                    <ChevronRight className="w-5 h-5 mx-auto" aria-hidden="true" />
                  </button>

                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/35 backdrop-blur px-4 py-2 rounded-full">
                    {selectedAchievement.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentImageIndex
                            ? "bg-sky-400 w-3 h-3"
                            : "bg-white/50 hover:bg-white/80 w-2 h-2"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute top-4 right-4 text-white text-xs font-semibold bg-black/45 backdrop-blur px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {selectedAchievement.images.length}
                  </div>
                </>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-2 gap-4">
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  {selectedAchievement.title}
                </h2>
                <span className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  {selectedAchievement.award}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  {selectedAchievement.university}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  {selectedAchievement.year}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-600 dark:text-sky-400" /> Team:
                  {selectedAchievement.teamSize}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                About
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {selectedAchievement.description}
              </p>

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
    </section>
  );
}
