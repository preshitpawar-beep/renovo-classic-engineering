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
          {/* LEFT — copy */}
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
                custom creativity from his time in Fast and Furious.
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

          {/* RIGHT — visuals stacked */}
          <FadeIn delay={0.3} y={50} className="about__visuals">

            {/* TOP — Elliott portrait */}
            <div className="about__portrait">
              <div className="about__corners">
                <span className="c-tl" /><span className="c-tr" />
                <span className="c-bl" /><span className="c-br" />
              </div>

              <img
                src="/elliott.jpg"
                alt="Elliott — Founder of Renovo Classic Engineering"
                className="about__portrait-img"
                loading="lazy"
              />

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

            {/* BOTTOM — Alfa Spider strip */}
            <div className="about__alfa">
              <div className="about__alfa-tag">
                <span className="about__alfa-tag-line" />
                <span className="about__alfa-tag-text">His 1977 Alfa Romeo Spider · Swiss Alps</span>
              </div>

              <div className="about__alfa-image">
                <div className="about__corners">
                  <span className="c-tl" /><span className="c-tr" />
                  <span className="c-bl" /><span className="c-br" />
                </div>
                <img
                  src="/alfa-spider.jpg"
                  alt="Elliott's 1977 Alfa Romeo Spider during a European road trip"
                  className="about__alfa-img"
                  loading="lazy"
                />
                <div className="about__alfa-overlay" />
              </div>
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
