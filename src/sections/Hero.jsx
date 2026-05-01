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

  // Subtle parallax on the car image
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Soft background atmosphere */}
      <motion.div className="hero__ghost" style={{ y: ghostY }}>
        RCE
      </motion.div>

      <div className="hero__lines" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1400 800">
          {[...Array(7)].map((_, i) => {
            const yEnd = 220 + i * 60
            return (
              <motion.line
                key={i}
                x1={700} y1={400}
                x2={1500} y2={yEnd}
                stroke="#b8945c"
                strokeWidth="0.5"
                strokeOpacity="0.14"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            )
          })}
        </svg>
      </div>

      <motion.div className="hero__inner" style={{ y: contentY, opacity }}>
        {/* LEFT — text content */}
        <div className="hero__left">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__badge-dot" />
            Coming Soon · Austin, Texas
          </motion.div>

          <h1 className="hero__title">
            <AnimatedText
              text="Premium service,"
              el="span"
              className="hero__title-line"
              delay={0.7}
            />
            <AnimatedText
              text="on a"
              el="span"
              className="hero__title-line"
              delay={0.95}
            />
            <AnimatedText
              text="personal level."
              el="span"
              className="hero__title-line hero__title-line--accent"
              delay={1.2}
            />
          </h1>

          <motion.div
            className="hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Renovo Classic Engineering brings <em>fifteen years</em> of British craftsmanship
              to Austin, Texas. Restoration, engineering, and care for classic and exotic cars.
            </p>
          </motion.div>

          <motion.div
            className="hero__cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 1, delay: 2.2 }}
          >
            <div className="journey__points">
              <div className="journey__point">
                <span className="journey__flag">🇬🇧</span>
                <span className="journey__label">From England</span>
              </div>
              <div className="journey__line" />
              <div className="journey__point journey__point--current">
                <span className="journey__flag">🇺🇸</span>
                <span className="journey__label">To Austin</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — car image */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="hero__image-frame" style={{ y: imageY }}>
            {/* Subtle radial glow behind car */}
            <div className="hero__image-glow" />

            <img
              src="/heroRCE.jpg"
              alt="Classic Maserati — Renovo Classic Engineering"
              className="hero__image"
            />

            {/* Decorative corner brackets */}
            <span className="hero__corner hero__corner--tl" />
            <span className="hero__corner hero__corner--tr" />
            <span className="hero__corner hero__corner--bl" />
            <span className="hero__corner hero__corner--br" />

            {/* Caption tag */}
            <div className="hero__caption">
              <span className="hero__caption-line" />
              <span className="hero__caption-text">Classic, exotic, &amp; bespoke</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
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
