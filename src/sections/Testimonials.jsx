import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import './Testimonials.css'

const testimonials = [
  {
    quote: "Elliott was the only person who had the knowledge, skill, and determination to diagnose the problem properly and repair the supercharger. Rather than giving up because of the lack of parts, he engineered a solution and got everything working perfectly again. If you have a difficult or unusual performance car problem that nobody else can solve, Elliott is the person to call.",
    author: "Lee Ablett",
    cars: ["Audi R8", "Custom Supercharger"],
  },
  {
    quote: "I have a number of old cars. At all times I've had full confidence in Elliott's ability to fix or maintain them all. Be it my classic Mini Cooper S, my Jaguar XJS's or my Maserati Merak. Elliott certainly knows his old Italian cars — my Merak has never performed so well.",
    author: "Paul Rhodes",
    cars: ["Mini Cooper S", "Jaguar XJS", "Maserati Merak"],
  },
  {
    quote: "We have used the expert services of Elliott over the last few years. He has maintained our classic cars to a high standard. He has a great eye for detail, often going the extra mile. We've always found his knowledge of older cars outstanding, and he's strived to repair and recondition original parts rather than replace with inferior quality components.",
    author: "Keith Chadney",
    location: "Dulverton, Somerset",
    cars: ["Classic Collection"],
  },
  {
    quote: "Elliott has been looking after my vehicles for several years and really knows his stuff. From early classics to modern vehicles you can be guaranteed great service. I would highly recommend!",
    author: "Robert Mugford",
    cars: ["Various"],
  },
  {
    quote: "Elliott was amazing in helping to get my 1968 Lotus Elan back on the road after more than 10 years of it being stuck in the garage. He was very knowledgeable and gave great advice about sensible improvements to make so that mechanically, the car is now so much better than it ever was before.",
    author: "Chris Harper",
    cars: ["1968 Lotus Elan"],
  },
  {
    quote: "I've been driving the same vintage car for 32 years and since Elliott has been maintaining it over the last 7 years it has never run better. His meticulous attention to detail and regular suggestions always work out well. On top of that he looks after my wife's '76 MGB, her pimped TD5 Land Rover, and her newish Maserati — because I know they will be done properly.",
    author: "Curtis Dowling",
    cars: ["Vintage", "1976 MGB", "Land Rover TD5", "Maserati"],
  },
  {
    quote: "As owners of two 50+ year classic cars we totally recommend Elliott, who not only shares our enthusiasm but adds his own amazing experience of their mechanics.",
    author: "P. Warren",
    cars: ["Classic Collection · 50+ years"],
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance every 8 seconds unless paused
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActive(a => (a + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [isPaused])

  const next = () => setActive(a => (a + 1) % testimonials.length)
  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">In their own words</span>
        </FadeIn>

        <div className="testimonials__head">
          <h2 className="testimonials__title">
            <AnimatedText text="Trusted by" el="span" className="testimonials__title-line" />
            <AnimatedText text="collectors &amp;" el="span" className="testimonials__title-line" delay={0.1} />
            <AnimatedText text="enthusiasts." el="span" className="testimonials__title-line testimonials__title-line--italic" delay={0.2} />
          </h2>

          <FadeIn delay={0.4}>
            <p className="testimonials__lead">
              Fifteen years of workshop stories — from Aston Martin owners, Maserati enthusiasts,
              and vintage car collectors across the UK.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div
            className="testimonials__viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="testimonials__quote-mark" aria-hidden="true">"</div>

            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                className="testimonial"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="testimonial__quote">
                  {t.quote}
                </blockquote>

                <div className="testimonial__meta">
                  <div className="testimonial__author-block">
                    <div className="testimonial__divider" />
                    <div>
                      <div className="testimonial__author">{t.author}</div>
                      {t.location && (
                        <div className="testimonial__location">{t.location}</div>
                      )}
                    </div>
                  </div>

                  <div className="testimonial__cars">
                    {t.cars.map((car, i) => (
                      <span key={i} className="testimonial__car-chip">{car}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="testimonials__controls">
          <div className="testimonials__count">
            <span className="testimonials__count-current">{String(active + 1).padStart(2, '0')}</span>
            <span className="testimonials__count-sep">/</span>
            <span className="testimonials__count-total">{String(testimonials.length).padStart(2, '0')}</span>
          </div>

          <div className="testimonials__nav">
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'on' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="testimonials__btns">
              <button className="testimonials__btn" onClick={prev} aria-label="Previous">←</button>
              <button className="testimonials__btn" onClick={next} aria-label="Next">→</button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
