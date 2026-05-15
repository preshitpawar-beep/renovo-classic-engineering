import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import './Instagram.css'

const IG_HANDLE = 'renovo_classic_engineering'
const IG_URL = 'https://www.instagram.com/renovo_classic_engineering/'

/* Slides — first cell of slide 1 is the real first post.
   All other cells are illustrated placeholders for now;
   replace them as Elliott adds new posts. */
const slides = [
  [
    {
      type: 'real',
      label: 'Engine work · Alfa twin-cam',
      href: 'https://www.instagram.com/p/DYVUj_rjszD/',
      image: '/instagram/post-1.jpg',
    },
    { type: 'svg', label: 'Coming soon', kind: 'car' },
    { type: 'svg', label: 'Coming soon', kind: 'wheel' },
  ],
  [
    { type: 'svg', label: 'Coming soon', kind: 'paint' },
    { type: 'svg', label: 'Coming soon', kind: 'wheel-int' },
    { type: 'svg', label: 'Coming soon', kind: 'beforeafter' },
  ],
]

const renderSVG = (kind) => {
  switch (kind) {
    case 'car':
      return (
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="300" height="300" fill="#0e0c0a" />
          <ellipse cx="150" cy="220" rx="130" ry="9" fill="rgba(184,148,92,.1)" />
          <path d="M28,180 Q36,128 82,112 L112,100 Q140,88 158,86 Q188,82 218,100 L252,124 Q270,138 272,180Z" fill="#3a3d42" />
          <path d="M28,180 Q75,172 112,166 L252,166 Q264,166 272,180Z" fill="#2a2c30" />
          <path d="M112,166 Q120,120 140,112 L198,104 Q222,104 238,124 L248,166Z" fill="#16161a" />
          <path d="M126,162 Q134,124 148,116 L192,108 L192,124 L192,162Z" fill="rgba(244,236,216,.18)" />
          <path d="M204,162 L204,118 Q220,112 232,126 L242,162Z" fill="rgba(244,236,216,.15)" />
          <circle cx="78" cy="194" r="28" fill="#16161a" /><circle cx="78" cy="194" r="20" fill="#0a0a0b" /><circle cx="78" cy="194" r="13" fill="#b8945c" />
          <circle cx="226" cy="194" r="28" fill="#16161a" /><circle cx="226" cy="194" r="20" fill="#0a0a0b" /><circle cx="226" cy="194" r="13" fill="#b8945c" />
          <line x1="28" y1="180" x2="272" y2="180" stroke="#b8945c" strokeWidth="1.5" opacity=".7" />
          <text x="150" y="270" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="14" fill="#b8945c" opacity=".4">coming soon</text>
        </svg>
      )
    case 'wheel':
      return (
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="300" height="300" fill="#0a0908" />
          <circle cx="150" cy="150" r="130" fill="#16161a" />
          <circle cx="150" cy="150" r="120" fill="#0e0e0f" />
          <circle cx="150" cy="150" r="125" fill="none" stroke="#1d1d22" strokeWidth="6" strokeDasharray="18 12" />
          <circle cx="150" cy="150" r="95" fill="#1d1d22" />
          <line x1="150" y1="62" x2="150" y2="238" stroke="#b8945c" strokeWidth="3.5" opacity=".75" />
          <line x1="62" y1="150" x2="238" y2="150" stroke="#b8945c" strokeWidth="3.5" opacity=".75" />
          <line x1="84" y1="84" x2="216" y2="216" stroke="#b8945c" strokeWidth="3.5" opacity=".75" />
          <line x1="216" y1="84" x2="84" y2="216" stroke="#b8945c" strokeWidth="3.5" opacity=".75" />
          <circle cx="150" cy="150" r="42" fill="#16161a" />
          <circle cx="150" cy="150" r="34" fill="#b8945c" opacity=".25" />
          <circle cx="150" cy="150" r="26" fill="#b8945c" opacity=".5" />
          <circle cx="150" cy="150" r="18" fill="#1d1d22" />
        </svg>
      )
    case 'paint':
      return (
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="300" height="300" fill="#100e0a" />
          <rect x="110" y="72" width="78" height="44" rx="8" fill="#2a2a2a" />
          <rect x="118" y="80" width="62" height="30" rx="5" fill="#222" />
          <rect x="188" y="88" width="36" height="12" rx="4" fill="#333" />
          <circle cx="226" cy="94" r="8" fill="#b8945c" opacity=".8" />
          <rect x="136" y="116" width="24" height="48" rx="5" fill="#2a2a2a" />
          <rect x="156" y="126" width="20" height="10" rx="2" fill="#b8945c" opacity=".7" />
          <ellipse cx="258" cy="76" rx="35" ry="28" fill="#b8945c" opacity=".1" />
          <ellipse cx="264" cy="72" rx="22" ry="17" fill="#b8945c" opacity=".18" />
          <ellipse cx="270" cy="68" rx="13" ry="11" fill="#b8945c" opacity=".28" />
          <rect x="30" y="55" width="44" height="30" rx="3" fill="#1a2030" />
          <rect x="30" y="92" width="44" height="30" rx="3" fill="#5a4a3a" />
          <rect x="30" y="129" width="44" height="30" rx="3" fill="#2a3a2a" />
          <rect x="30" y="166" width="44" height="30" rx="3" fill="#b8945c" opacity=".75" />
        </svg>
      )
    case 'wheel-int':
      return (
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="300" height="300" fill="#120e08" />
          <rect x="14" y="148" width="272" height="148" rx="6" fill="#1d1d22" />
          <circle cx="150" cy="162" r="70" fill="none" stroke="#3a3d42" strokeWidth="14" />
          <circle cx="150" cy="162" r="70" fill="none" stroke="#b8945c" strokeWidth="2.5" opacity=".65" />
          <line x1="150" y1="92" x2="150" y2="128" stroke="#b8945c" strokeWidth="6" strokeLinecap="round" opacity=".85" />
          <line x1="90" y1="200" x2="116" y2="181" stroke="#b8945c" strokeWidth="6" strokeLinecap="round" opacity=".85" />
          <line x1="210" y1="200" x2="184" y2="181" stroke="#b8945c" strokeWidth="6" strokeLinecap="round" opacity=".85" />
          <circle cx="150" cy="162" r="22" fill="#2a2a2a" />
          <circle cx="150" cy="162" r="16" fill="#b8945c" opacity=".25" />
        </svg>
      )
    case 'beforeafter':
      return (
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <rect width="300" height="300" fill="#0e0c08" />
          <rect x="0" y="0" width="147" height="300" fill="#1d1816" />
          <rect x="153" y="0" width="147" height="300" fill="#0a0908" />
          <rect x="147" y="0" width="6" height="300" fill="#b8945c" opacity=".9" />
          <rect x="6" y="8" width="62" height="18" rx="2" fill="rgba(0,0,0,.65)" />
          <text x="36" y="21" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#888" letterSpacing="2">BEFORE</text>
          <rect x="160" y="8" width="56" height="18" rx="2" fill="rgba(0,0,0,.65)" />
          <text x="188" y="21" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#b8945c" letterSpacing="2">AFTER</text>
        </svg>
      )
    default:
      return null
  }
}

export default function Instagram() {
  const [active, setActive] = useState(0)

  const next = () => setActive(a => (a + 1) % slides.length)
  const prev = () => setActive(a => (a - 1 + slides.length) % slides.length)

  return (
    <section className="insta" id="instagram">
      <div className="container">
        <div className="insta__head">
          <div>
            <FadeIn>
              <span className="eyebrow">Follow the Journey</span>
            </FadeIn>
            <h2 className="insta__title">
              <AnimatedText text="@renovo_classic_engineering" el="span" className="insta__title-line" />
              <AnimatedText text="on Instagram" el="span" className="insta__title-line insta__title-line--italic" delay={0.15} />
            </h2>
          </div>

          <FadeIn delay={0.3}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="insta__follow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              Follow @{IG_HANDLE}
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="insta__viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="insta__grid"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {slides[active].map((cell, i) => (
                <a
                  key={i}
                  href={cell.href || IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`insta__cell ${cell.type === 'real' ? 'insta__cell--real' : ''}`}
                  aria-label={cell.label}
                >
                  {cell.type === 'real' ? (
                    <img src={cell.image} alt={cell.label} loading="lazy" className="insta__cell-img" />
                  ) : (
                    renderSVG(cell.kind)
                  )}
                  <div className="insta__cell-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                    <span>{cell.label}</span>
                  </div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        <FadeIn delay={0.4} className="insta__controls">
          <span className="insta__caption">{`Slide ${active + 1} of ${slides.length}`}</span>

          <div className="insta__nav">
            <div className="insta__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`insta__dot ${i === active ? 'on' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="insta__btns">
              <button className="insta__btn" onClick={prev} aria-label="Previous slide">←</button>
              <button className="insta__btn" onClick={next} aria-label="Next slide">→</button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="insta__note">
            More posts coming as we build. Follow <a href={IG_URL} target="_blank" rel="noopener noreferrer">@{IG_HANDLE}</a> for the latest from the workshop.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
