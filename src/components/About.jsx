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
    <section id="about" className="section-wrap">
      <p className="section-kicker">Introduction</p>
      <h2 className="section-title">About me</h2>

      <div className="mt-14 grid grid-cols-1 xl:grid-cols-[1.05fr_1fr] gap-8 xl:gap-10 items-start">
        <div className="glass-panel-strong relative rounded-[1.75rem] overflow-hidden">
          <LazyImage
            src="./assets/user-image.png"
            alt="Ramishka portrait"
            className="w-full h-[420px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Computer Engineer</p>
            <h3 className="text-2xl md:text-3xl mt-1 font-semibold">Ramishka Thennakoon</h3>
            <p className="mt-2 text-sm md:text-base text-white/90">Designing digital systems where software, hardware, and AI work together.</p>
          </div>
        </div>

        <div className="glass-panel rounded-[1.75rem] p-6 md:p-8 xl:p-10">
          <p className="text-base md:text-lg leading-8 text-slate-700 dark:text-slate-300">
            I&apos;m a Computer Engineering undergraduate and freelancer building reliable systems across web platforms, AI, and embedded hardware — from SaaS products to industrial IoT and ML systems. I focus on solving real problems and shipping things that work
          </p>

          <p className="mt-5 text-base md:text-lg leading-8 text-slate-700 dark:text-slate-300">
            I care about impact over hype: shipping reliable products, solving measurable problems, and turning complex ideas into systems people can use with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/15 px-4 py-5 bg-white/85 dark:bg-slate-900/45">
              <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100">7000+</p>
              <p className="text-xs mt-1 uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Users served</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/15 px-4 py-5 bg-white/85 dark:bg-slate-900/45">
              <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100">8+</p>
              <p className="text-xs mt-1 uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Production projects</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/15 px-4 py-5 bg-white/85 dark:bg-slate-900/45">
              <p className="text-3xl font-semibold text-slate-900 dark:text-slate-100">2026</p>
              <p className="text-xs mt-1 uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">IEEE shortlist year</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-900"
            >
              Let&apos;s collaborate
              <FaArrowRight className="w-4 h-4" />
            </a>
            <a
              href="./assets/cv/RamishkaThennakoon_CV_AI.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-white/25 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {focusAreas.map((area, index) => (
          <div
            key={area.title}
            className="glass-panel rounded-2xl px-6 py-6 hover:-translate-y-1 transition duration-300"
            style={{ animationDelay: `${0.08 * index}s` }}
          >
            <div className="w-11 h-11 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center">
              {area.icon}
            </div>
            <h3 className="text-xl mt-4 mb-2 font-semibold text-slate-900 dark:text-slate-100">{area.title}</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{area.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
