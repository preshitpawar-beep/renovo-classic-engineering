import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Engine Work',
    sub: 'A personal favourite',
    desc: 'Detailed and extensive engine work to freshen up the beating heart of your beloved vehicle. Either as a crate engine or a drive-in, drive-out service. Speak to us and let us know your requirements.',
    icon: 'engine',
  },
  {
    num: '02',
    title: 'Restorative Work',
    sub: 'Honour the patina',
    desc: "We adore the history and character cars develop over the decades — scratches and dents tell a hundred stories. But if you'd rather see your pride and joy gleaming, we offer welding, minor bodywork, and any work to keep your car (and you) happy. In-house bodyshop coming soon.",
    icon: 'tools',
  },
  {
    num: '03',
    title: 'Maintenance & Repair',
    sub: 'Day-to-day care',
    desc: 'Beyond restoration, we handle the everyday tasks that keep classics and exotics running properly — brakes, suspension, tune-ups. We would be pleased to help you any way we can.',
    icon: 'wrench',
  },
  {
    num: '04',
    title: 'Custom Engineering',
    sub: 'Outside the box',
    desc: 'Have something unusual in mind? Elliott\'s passion for vehicles runs to his core. Even if a job might be financially "foolish" or difficult to engineer, reach out — taking on the challenge is the enjoyment.',
    icon: 'gear',
  },
  {
    num: '05',
    title: 'Laser Cleaning',
    sub: 'State-of-the-art',
    desc: 'Bespoke to Renovo, we offer state-of-the-art laser cleaning. This incredible machinery allows efficient and effective removal of corrosion or dirt from components without harming the surface underneath. Available to trade and retail customers.',
    icon: 'laser',
  },
]

const ICONS = {
  engine: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="10" y="16" width="28" height="20" rx="2" />
      <rect x="14" y="12" width="4" height="6" rx="1" />
      <rect x="22" y="12" width="4" height="6" rx="1" />
      <rect x="30" y="12" width="4" height="6" rx="1" />
      <line x1="14" y1="36" x2="14" y2="40" />
      <line x1="34" y1="36" x2="34" y2="40" />
      <circle cx="24" cy="26" r="3" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14 8 L18 12 L14 16 L10 12 Z" />
      <line x1="14" y1="16" x2="14" y2="40" />
      <circle cx="34" cy="14" r="5" />
      <line x1="30" y1="18" x2="22" y2="26" />
      <rect x="20" y="24" width="6" height="14" rx="1" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M30 8 L40 8 L40 18 L34 24 L40 30 L40 40 L30 40 L24 34 L18 40 L8 40 L8 30 L14 24 L8 18 L8 8 L18 8 L24 14 Z" />
      <circle cx="24" cy="24" r="3" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="24" cy="24" r="6" />
      <path d="M24 8 L24 14 M24 34 L24 40 M8 24 L14 24 M34 24 L40 24 M12 12 L16 16 M32 32 L36 36 M36 12 L32 16 M16 32 L12 36" />
    </svg>
  ),
  laser: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="6" y="20" width="14" height="8" rx="1" />
      <line x1="20" y1="24" x2="42" y2="24" strokeDasharray="2 2" />
      <circle cx="42" cy="24" r="2" fill="currentColor" />
      <path d="M14 18 L14 14 M10 18 L10 16" />
    </svg>
  ),
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <FadeIn>
          <span className="eyebrow">What We Offer</span>
        </FadeIn>

        <div className="services__header">
          <h2 className="services__title">
            <AnimatedText text="Five disciplines." el="span" className="services__title-line" />
            <AnimatedText text="One workshop." el="span" className="services__title-line services__title-line--italic" delay={0.15} />
          </h2>

          <FadeIn delay={0.4}>
            <p className="services__lead">
              From engine rebuilds to laser-precise restoration, every service Renovo offers
              is delivered with the same standard — Elliott's hand on every project.
            </p>
          </FadeIn>
        </div>

        <div className="services__list">
          {services.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.08} y={40}>
              <motion.article
                className="service"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="service__num">{s.num}</div>

                <div className="service__icon">
                  {ICONS[s.icon]}
                </div>

                <div className="service__content">
                  <div className="service__head">
                    <h3 className="service__title">{s.title}</h3>
                    <span className="service__sub">{s.sub}</span>
                  </div>
                  <p className="service__desc">{s.desc}</p>
                </div>

                <div className="service__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
