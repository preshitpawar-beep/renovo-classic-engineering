import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Ambient layered background */}
      <motion.div className="hero__ghost" style={{ y: ghostY }}>
        RCE
      </motion.div>

      <div className="hero__lines" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1400 800">
          {[...Array(9)].map((_, i) => {
            const yEnd = 200 + i * 50
            return (
              <motion.line
                key={i}
                x1={700} y1={400}
                x2={1500} y2={yEnd}
                stroke="#b8945c"
                strokeWidth="0.5"
                strokeOpacity="0.18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            )
          })}
        </svg>
      </div>

      <motion.div className="hero__content" style={{ y: contentY, opacity }}>
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="hero__badge-dot" />
          Coming Soon · Dallas–Fort Worth
        </motion.div>

        <h1 className="hero__title">
          <AnimatedText
            text="Premium service,"
            el="span"
            className="hero__title-line"
            delay={0.6}
          />
          <AnimatedText
            text="on a"
            el="span"
            className="hero__title-line"
            delay={0.85}
          />
          <AnimatedText
            text="personal level."
            el="span"
            className="hero__title-line hero__title-line--accent"
            delay={1.1}
          />
        </h1>

        <motion.div
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <p>
            Renovo Classic Engineering brings <em>fifteen years</em> of British craftsmanship
            to Dallas–Fort Worth. Restoration, engineering, and care for classic and exotic cars.
          </p>
        </motion.div>

        <motion.div
          className="hero__cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.85 }}
        >
          <a href="#enquiry" className="btn btn--primary">
            Pre-register Interest
          </a>
          <a href="#about" className="btn btn--ghost">
            Meet Elliott
          </a>
        </motion.div>

        <motion.div
          className="hero__journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <div className="journey__line" />
          <div className="journey__points">
            <div className="journey__point">
              <span className="journey__flag">🇬🇧</span>
              <span className="journey__label">From England</span>
            </div>
            <div className="journey__point journey__point--current">
              <span className="journey__flag">🇺🇸</span>
              <span className="journey__label">To Texas</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <span>Scroll</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
