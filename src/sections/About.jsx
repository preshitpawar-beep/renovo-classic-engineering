import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">About Elliott</span>
        </FadeIn>

        <div className="about__grid">
          <div className="about__copy">
            <h2 className="about__title">
              <AnimatedText text="A life shaped" el="span" className="about__title-line" />
              <AnimatedText text="by " el="span" className="about__title-line" delay={0.1} />
              <AnimatedText text="engines and" el="span" className="about__title-line about__title-line--italic" delay={0.2} />
              <AnimatedText text="craft." el="span" className="about__title-line about__title-line--italic" delay={0.3} />
            </h2>

            <FadeIn delay={0.4}>
              <p className="about__lead">
                From a very young age, Elliott grew up in his father's workshop. Engineering and modification
                was always part of life — accidentally sinking modified RC amphicars in the neighbour's
                lake, or making trailers for his bicycle.
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <p>
                Quality and craft were instilled early. Many years of experience have already been gained,
                blending personal service from independent workshops, cleanliness from dealerships, and the
                custom creativity of his time at Fast and Furious.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <p>
                Cars are the backbone of Elliott's life — he understands the weight they carry in people's
                lives. The memories, the experiences, the freedom. He has driven his <em>1977 Alfa Romeo
                Spider</em> across Europe several times, racking up thousands of miles abroad. The car
                now resides in Texas with him, ready for the next chapter.
              </p>
            </FadeIn>

            <FadeIn delay={0.85}>
              <p>
                After fifteen successful years in England, Elliott is creating a new journey across the pond
                on American soil — maintaining and improving classic and exotic cars for the next generation.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} y={50} className="about__visual-wrap">
            <div className="about__visual">
              <div className="about__visual-corners">
                <span className="corner-tl" />
                <span className="corner-tr" />
                <span className="corner-bl" />
                <span className="corner-br" />
              </div>

              {/* SVG illustration: Alfa Spider silhouette */}
              <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className="about__svg">
                {/* Background */}
                <defs>
                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1d1d22" />
                    <stop offset="100%" stopColor="#0e0e0f" />
                  </linearGradient>
                  <radialGradient id="glowGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#b8945c" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#b8945c" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="400" height="500" fill="url(#bgGrad)" />
                <circle cx="200" cy="200" r="140" fill="url(#glowGrad)" />

                {/* Decorative arc — like a spotlight */}
                <path d="M60 320 Q200 220 340 320" stroke="#b8945c" strokeWidth="0.5" fill="none" opacity="0.3" />

                {/* Alfa Romeo Spider silhouette — 3/4 view */}
                <g transform="translate(40, 250)">
                  {/* Shadow */}
                  <ellipse cx="160" cy="170" rx="150" ry="6" fill="#000" opacity="0.5" />

                  {/* Body */}
                  <path
                    d="M20,120 Q30,90 70,80 L120,72 Q160,62 200,62 Q250,62 280,82 L310,100 Q320,114 320,120 L20,120 Z"
                    fill="#3a3d42"
                  />
                  {/* Hood top + windscreen */}
                  <path d="M70,80 Q90,55 130,52 L210,52 Q235,52 250,78 L280,82 L70,80 Z" fill="#2a2c30" />
                  {/* Windscreen */}
                  <path d="M95,80 Q110,60 130,58 L195,58 Q210,60 215,80 L95,80 Z" fill="#16161a" />
                  {/* Bonnet line */}
                  <line x1="20" y1="115" x2="320" y2="115" stroke="#b8945c" strokeWidth="0.8" opacity="0.5" />
                  {/* Door line */}
                  <line x1="160" y1="80" x2="158" y2="120" stroke="#0e0e0f" strokeWidth="1" />

                  {/* Chrome trim — brass colour */}
                  <line x1="20" y1="120" x2="320" y2="120" stroke="#b8945c" strokeWidth="1" opacity="0.7" />

                  {/* Wheels */}
                  <circle cx="78" cy="140" r="22" fill="#16161a" />
                  <circle cx="78" cy="140" r="14" fill="#0e0e0f" />
                  <circle cx="78" cy="140" r="10" fill="#b8945c" opacity="0.85" />
                  <circle cx="78" cy="140" r="5" fill="#d4a96a" />
                  {/* spokes */}
                  <line x1="78" y1="130" x2="78" y2="150" stroke="#0e0e0f" strokeWidth="1.2" />
                  <line x1="68" y1="140" x2="88" y2="140" stroke="#0e0e0f" strokeWidth="1.2" />
                  <line x1="71" y1="133" x2="85" y2="147" stroke="#0e0e0f" strokeWidth="1.2" />
                  <line x1="85" y1="133" x2="71" y2="147" stroke="#0e0e0f" strokeWidth="1.2" />

                  <circle cx="262" cy="140" r="22" fill="#16161a" />
                  <circle cx="262" cy="140" r="14" fill="#0e0e0f" />
                  <circle cx="262" cy="140" r="10" fill="#b8945c" opacity="0.85" />
                  <circle cx="262" cy="140" r="5" fill="#d4a96a" />
                  <line x1="262" y1="130" x2="262" y2="150" stroke="#0e0e0f" strokeWidth="1.2" />
                  <line x1="252" y1="140" x2="272" y2="140" stroke="#0e0e0f" strokeWidth="1.2" />
                  <line x1="255" y1="133" x2="269" y2="147" stroke="#0e0e0f" strokeWidth="1.2" />
                  <line x1="269" y1="133" x2="255" y2="147" stroke="#0e0e0f" strokeWidth="1.2" />

                  {/* Headlight */}
                  <ellipse cx="32" cy="105" rx="9" ry="6" fill="#f4ecd8" opacity="0.85" />
                  <ellipse cx="32" cy="105" rx="5" ry="3" fill="#fdfbf6" />

                  {/* Door handle */}
                  <rect x="155" y="98" width="14" height="3" rx="1.5" fill="#b8945c" opacity="0.8" />
                </g>

                {/* Caption */}
                <text x="200" y="430" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fill="#b8945c" fontStyle="italic" letterSpacing="2">
                  1977 Alfa Romeo Spider
                </text>
                <text x="200" y="450" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#666058" letterSpacing="3">
                  ELLIOTT'S OWN — NOW IN TEXAS
                </text>
              </svg>

              <motion.div
                className="about__caption"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="about__caption-mark">E</div>
                <div>
                  <div className="about__caption-name">Elliott</div>
                  <div className="about__caption-role">Founder &amp; Master Restorer</div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* Stats strip */}
        <FadeIn delay={0.4} className="about__stats">
          <div className="stat">
            <div className="stat__num">15<span className="stat__plus">+</span></div>
            <div className="stat__label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat__num">∞</div>
            <div className="stat__label">European Miles in His Spider</div>
          </div>
          <div className="stat">
            <div className="stat__num">🇬🇧→🇺🇸</div>
            <div className="stat__label">From England to Austin</div>
          </div>
          <div className="stat">
            <div className="stat__num">1977</div>
            <div className="stat__label">Alfa Romeo Spider</div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
