import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Logo from './Logo'
import './Nav.css'

const links = [
  { id: 'about',     label: 'About' },
  { id: 'services',  label: 'Services' },
  { id: 'careers',   label: 'Careers' },
  { id: 'instagram', label: 'Instagram' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // scroll-spy
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'careers', 'instagram', 'enquiry']
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(en => {
          if (en.isIntersecting) setActive(en.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#home" className="nav__brand" aria-label="Renovo Classic Engineering home">
          <Logo size={42} />
          <div className="nav__brand-text">
            <span className="nav__name">Renovo Classic Engineering</span>
            <span className="nav__tag">Premium service, on a personal level.</span>
          </div>
        </a>

        <ul className="nav__links">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'nav__link nav__link--active' : 'nav__link'}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#enquiry" className="nav__cta">Pre-register</a>
          </li>
        </ul>
      </motion.nav>

      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />
    </>
  )
}
