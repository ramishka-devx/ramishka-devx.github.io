import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import LazyImage from './LazyImage'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            } else {
                navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
                navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
            }
        })

        // -------- light mode and dark mode -----------

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <LazyImage src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">

                <a href="#!" className="flex items-center gap-4">
                    <span className="text-2xl font-ramishka tracking-wide dark:text-white">Ramishka.me</span>
                </a>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent ">
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#top">Home</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#about">About me</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#services">Services</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#work">My Work</a></li>
                    <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#contact">Contact me</a></li>
                </ul>

                <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-3">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-darkHover rounded-full transition">
                            <FaGithub className="w-5 h-5 dark:text-white" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-darkHover rounded-full transition">
                            <FaLinkedin className="w-5 h-5 dark:text-white" />
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-darkHover rounded-full transition">
                            <FaWhatsapp className="w-5 h-5 dark:text-white" />
                        </a>
                    </div>
                    <button onClick={toggleTheme}>
                        <LazyImage src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <LazyImage src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <LazyImage src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <LazyImage src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <LazyImage src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <LazyImage src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
                    
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-4 mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Follow me</p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </ul>
            </nav>
        </>
    )
}