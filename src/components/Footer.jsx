export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-10">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
                <ul className="flex items-center gap-6 text-sm">
                    <li><a href="#!" className="hover:text-gray-700 dark:hover:text-gray-300 transition">GitHub</a></li>
                    <li><a href="#!" className="hover:text-gray-700 dark:hover:text-gray-300 transition">LinkedIn</a></li>
                    <li><a href="#!" className="hover:text-gray-700 dark:hover:text-gray-300 transition">Twitter</a></li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Ramishka. All rights reserved.</p>
            </div>
        </footer>
    )
}