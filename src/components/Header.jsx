import LazyImage from './LazyImage'

export default function Header() {
    return (
        <header className="relative isolate min-h-screen overflow-hidden">
            <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
            <div className="absolute -right-12 top-1/3 h-56 w-56 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-500/20" />

            <div className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-5 py-24">
                <span className="px-4 py-1 rounded-full border border-slate-300/70 dark:border-white/30 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-white/5 backdrop-blur">
                    Building AI-Ready Digital Systems
                </span>

                <LazyImage src="./assets/profile-img.png" alt="Ramishka profile photo" className="rounded-full w-32 md:w-36 shadow-xl ring-4 ring-white/80 dark:ring-white/20" />

                <h3 className="flex items-end gap-2 text-lg md:text-2xl font-Ovo text-slate-700 dark:text-slate-200">
                    Hi! I&apos;m Ramishka
                    <LazyImage src="./assets/hand-icon.png" alt="Waving hand" className="w-6 mb-1" />
                </h3>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white">
                    Computer Engineer
                    <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-orange-500 bg-clip-text text-transparent">
                        & Freelancer
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto font-Ovo text-base md:text-lg leading-8 text-slate-700 dark:text-slate-300">
                    I&apos;m passionate about building enterprise IT solutions that blend software and hardware to solve real industrial problems. My focus is creating AI-powered products that improve how businesses operate.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-white/20">Embedded + Software</span>
                    <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-white/20">AI Integration</span>
                    <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-white/20">Enterprise Solutions</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
                    <a href="#contact"
                        className="px-10 py-3 border rounded-full bg-gradient-to-r from-sky-600 to-orange-500 text-white flex items-center gap-2 border-transparent hover:shadow-lg hover:-translate-y-0.5 transition duration-300">
                        contact me <LazyImage src="./assets/right-arrow-white.png" alt="Arrow" className="w-4" />
                    </a>

                    <a href="./assets/cv/RamishkaThennakoon_CV_AI.pdf" download
                        className="px-10 py-3 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white/90 dark:bg-transparent dark:text-white hover:-translate-y-0.5 transition duration-300">
                        my resume <LazyImage src="./assets/download-icon.png" alt="Download" className="w-4 dark:invert" />
                    </a>
                </div>
            </div>
        </header>
    )
}