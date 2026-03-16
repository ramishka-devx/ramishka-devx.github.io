export default function Footer() {
  return (
    <footer className="section-wrap pt-6 md:pt-8 pb-10 md:pb-12">
      <div className="glass-panel rounded-2xl max-w-4xl mx-auto px-6 py-7 flex flex-col items-center gap-4">
        <ul className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
          <li><a href="#!" className="hover:text-slate-900 dark:hover:text-white transition">GitHub</a></li>
          <li><a href="#!" className="hover:text-slate-900 dark:hover:text-white transition">LinkedIn</a></li>
          <li><a href="#!" className="hover:text-slate-900 dark:hover:text-white transition">Twitter</a></li>
        </ul>
        <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Ramishka. All rights reserved.</p>
      </div>
    </footer>
  )
}
