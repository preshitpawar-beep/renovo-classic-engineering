import { useEffect } from 'react'
import Lenis from 'lenis'

import Nav from './components/Nav'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Careers from './sections/Careers'
import Instagram from './sections/Instagram'
import Enquiry from './sections/Enquiry'

export default function App() {
  // Smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Honour reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lenis.destroy()
    }

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Careers />
        <Instagram />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}
