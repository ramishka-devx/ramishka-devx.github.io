export default function Footer() {
  return (
    <footer className="section-wrap pt-6 md:pt-8 pb-10 md:pb-12">
      <div className="glass-panel-strong max-w-5xl mx-auto rounded-3xl px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">Ramishka.me</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Ramishka. All rights reserved.
            </p>
          </div>

          <ul className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <a
                href="#!"
                className="inline-flex px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="inline-flex px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="inline-flex px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
