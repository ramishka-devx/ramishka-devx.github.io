import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import LazyImage from "./LazyImage";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About me" },
  // { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact me" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 px-6 md:px-10 xl:px-[10%] py-4 transition-all duration-300 ${
        isScrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${
          isScrolled
            ? "glass-panel-strong"
            : "bg-white/45 dark:bg-slate-900/45 border border-white/40 dark:border-white/10 backdrop-blur"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="text-xl md:text-2xl font-ramishka tracking-wide text-slate-900 dark:text-white">
            Ramishka.me
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/75 dark:bg-slate-900/50 px-2 py-1.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="https://github.com/ramishka-devx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
            >
              <FaGithub className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://linkedin.com/in/ramishka-thennakoon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
            >
              <FaLinkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://wa.me/qr/526DPGYELPHPC1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
            >
              <FaWhatsapp className="w-4.5 h-4.5" />
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            <LazyImage src="./assets/moon_icon.png" alt="" className="w-4 dark:hidden" />
            <LazyImage src="./assets/sun_icon.png" alt="" className="w-4 hidden dark:block" />
          </button>

          <button
            className="md:hidden p-2 rounded-full border border-slate-200/80 dark:border-slate-700/80"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <LazyImage src="./assets/menu-black.png" alt="" className="w-5 dark:hidden" />
            <LazyImage src="./assets/menu-white.png" alt="" className="w-5 hidden dark:block" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm transition ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-72 glass-panel-strong p-6 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="ml-auto mb-6 block p-1"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <LazyImage src="./assets/close-black.png" alt="" className="w-4 dark:hidden" />
            <LazyImage src="./assets/close-white.png" alt="" className="w-4 hidden dark:block" />
          </button>

          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-slate-200/80 dark:border-slate-700/80 pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-3">Follow me</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/ramishka-devx" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/10 transition"><FaGithub /></a>
              <a href="https://linkedin.com/in/ramishka-thennakoon" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/10 transition"><FaLinkedin /></a>
              <a href="https://wa.me/qr/526DPGYELPHPC1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/10 transition"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

