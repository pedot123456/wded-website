import { LazyMotion, domAnimation } from 'framer-motion'
import { About } from './components/About'
import { Community } from './components/Community'
import { Contact } from './components/Contact'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Packages } from './components/Packages'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Values } from './components/Values'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Process />
        <Packages />
        <Community />
        <Values />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LazyMotion>
  )
}
