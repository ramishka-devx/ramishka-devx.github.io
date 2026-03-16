import LazyImage from './LazyImage'

export default function Header() {
  return (
    <header id="top" className="pt-24 md:pt-28">
      <div className="section-wrap pt-8 md:pt-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200/80 dark:border-slate-700/70 bg-white/85 dark:bg-slate-900/70 px-6 py-12 md:px-12 md:py-16 text-center shadow-sm">
          <span className="inline-flex px-4 py-1.5 rounded-full border border-slate-300/80 dark:border-slate-600/70 text-[11px] sm:text-xs tracking-[0.18em] uppercase font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900">
            Building AI-Ready Digital Systems
          </span>

          <LazyImage
            src="./assets/profile-img.png"
            alt="Ramishka profile photo"
            className="mx-auto mt-7 rounded-full w-24 md:w-28 border-2 border-slate-200 dark:border-slate-700"
          />

          <h3 className="mt-6 flex items-end justify-center gap-2 text-base md:text-lg font-medium text-slate-700 dark:text-slate-200">
            Hi! I&apos;m Ramishka
            <LazyImage src="./assets/hand-icon.png" alt="Waving hand" className="w-5 mb-1" />
          </h3>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 dark:text-white">
            Computer Engineer
            <span className="block mt-1 text-slate-700 dark:text-slate-200">
              & Freelancer
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-8 text-slate-600 dark:text-slate-300">
            I&apos;m passionate about building enterprise IT solutions that blend software and hardware to solve real industrial problems. My focus is creating AI-powered products that improve how businesses operate.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
            <span className="px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60">Embedded + Software</span>
            <span className="px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60">AI Integration</span>
            <span className="px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60">Enterprise Solutions</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition"
            >
              contact me <LazyImage src="./assets/right-arrow-white.png" alt="Arrow" className="w-4 dark:invert" />
            </a>

            <a
              href="./assets/cv/RamishkaThennakoon_CV_AI.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/70 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              my resume <LazyImage src="./assets/download-icon.png" alt="Download" className="w-4 dark:invert" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
