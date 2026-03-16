import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Achievements from './components/Achievements'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import ToolsTechnologies from './components/ToolsTechnologies'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'

export default function App() {
  return (
    <div className="relative overflow-x-clip text-slate-900 dark:text-slate-100">
      <LenisScroll />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-400/20" />
      </div>

      <Navbar />
      <Header />
      <About />
      <div id="services" className="scroll-mt-28" />
      <Work />
      <Achievements />
      <ToolsTechnologies />
      {/* <Projects /> */}
      {/* <Services /> */}
      <Contact />
      <Footer />
    </div>
  )
}
