import { FaArrowRight, FaBrain, FaCode, FaMicrochip } from 'react-icons/fa'
import LazyImage from './LazyImage'

export default function About() {
  const focusAreas = [
    {
      icon: <FaCode className="w-5 h-5" />,
      title: 'Full-stack Engineering',
      description: 'Building scalable web platforms with clean APIs, reliable deployments, and business-focused features.',
    },
    {
      icon: <FaBrain className="w-5 h-5" />,
      title: 'Applied AI',
      description: 'Designing practical AI systems for prediction, automation, and decision support in real-world environments.',
    },
    {
      icon: <FaMicrochip className="w-5 h-5" />,
      title: 'Embedded + IoT',
      description: 'Connecting sensors, firmware, and cloud workflows for industrial monitoring and smart control solutions.',
    },
  ]

  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/20 shadow-sm">
          <LazyImage
            src="./assets/user-image.png"
            alt="Ramishka portrait"
            className="w-full h-[420px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">Computer Engineer</p>
            <h3 className="text-2xl md:text-3xl mt-1 font-semibold">Ramishka Thennakoon</h3>
            <p className="mt-2 text-sm md:text-base text-white/90">Designing digital systems where software, hardware, and AI work together.</p>
          </div>
        </div>

        <div>
          <p className="text-base md:text-lg leading-8 text-gray-700 dark:text-white/80 font-Ovo">
            I&apos;m a Computer Engineering undergraduate and freelancer focused on delivering enterprise-grade solutions that combine web platforms, AI models, and embedded systems. My work spans SaaS products, industrial IoT deployments, and research-driven machine learning systems.
          </p>

          <p className="mt-5 text-base md:text-lg leading-8 text-gray-700 dark:text-white/80 font-Ovo">
            I care about impact over hype: shipping reliable products, solving measurable problems, and turning complex ideas into systems people can use with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="rounded-2xl border border-gray-200 dark:border-white/20 px-4 py-5 bg-white dark:bg-transparent">
              <p className="text-3xl font-semibold">7000+</p>
              <p className="text-sm mt-1 text-gray-600 dark:text-white/70">Users served</p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-white/20 px-4 py-5 bg-white dark:bg-transparent">
              <p className="text-3xl font-semibold">8+</p>
              <p className="text-sm mt-1 text-gray-600 dark:text-white/70">Production projects</p>
            </div>
            <div className="rounded-2xl border border-gray-200 dark:border-white/20 px-4 py-5 bg-white dark:bg-transparent">
              <p className="text-3xl font-semibold">2026</p>
              <p className="text-sm mt-1 text-gray-600 dark:text-white/70">IEEE shortlist year</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white"
            >
              Let&apos;s collaborate
              <FaArrowRight className="w-4 h-4" />
            </a>
            <a
              href="./assets/cv/RamishkaThennakoon_CV_AI.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-2xl border border-gray-200 dark:border-white/20 px-6 py-6 bg-white dark:bg-transparent hover:-translate-y-1 hover:shadow-lg transition duration-300"
          >
            <div className="w-11 h-11 rounded-full bg-gray-100 dark:bg-darkHover flex items-center justify-center">
              {area.icon}
            </div>
            <h3 className="text-xl mt-4 mb-2 font-semibold">{area.title}</h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-white/75">{area.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
