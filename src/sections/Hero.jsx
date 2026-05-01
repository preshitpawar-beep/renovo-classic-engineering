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

  // Parallax: image moves slower than scroll, text moves faster
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0.55, 0.85])

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Background image with parallax */}
      <motion.div
        className="hero__image-wrap"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src="/heroRCE.jpg"
          alt="Classic Maserati — Renovo Classic Engineering"
          className="hero__image"
        />
      </motion.div>

      {/* Dark gradient overlay so text reads cleanly */}
      <motion.div
        className="hero__overlay"
        style={{ opacity: overlayOpacity }}
      />

      {/* Vignette for cinematic edge */}
      <div className="hero__vignette" />

      {/* Content */}
      <motion.div className="hero__content" style={{ y: textY }}>
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="hero__badge-dot" />
          Coming Soon · Austin, Texas
        </motion.div>

        {/* Massive RCE wordmark — the centrepiece */}
        <motion.div
          className="hero__wordmark"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__wordmark-letter">R</span>
          <span className="hero__wordmark-letter">C</span>
          <span className="hero__wordmark-letter">E</span>
        </motion.div>

        <h1 className="hero__title">
          <AnimatedText
            text="Renovo Classic"
            el="span"
            className="hero__title-line"
            delay={1.4}
          />
          <AnimatedText
            text="Engineering"
            el="span"
            className="hero__title-line hero__title-line--accent"
            delay={1.6}
          />
        </h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          Premium service, on a personal level.
        </motion.p>

        <motion.div
          className="hero__cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
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
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="journey__points">
            <div className="journey__point">
              <span className="journey__flag">🇬🇧</span>
              <span className="journey__label">From England</span>
            </div>
            <div className="journey__line" />
            <div className="journey__point journey__point--current">
              <span className="journey__flag">🇺🇸</span>
              <span className="journey__label">To Austin, Texas</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
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
