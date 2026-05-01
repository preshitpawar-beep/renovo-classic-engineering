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
    image: '/services/engine.jpg',  // place your photo at public/services/engine.jpg
  },
  {
    num: '02',
    title: 'Restorative Work',
    sub: 'Honour the patina',
    desc: "We adore the history and character cars develop over the decades — scratches and dents tell a hundred stories. But if you'd rather see your pride and joy gleaming, we offer welding, minor bodywork, and any work to keep your car (and you) happy. In-house bodyshop coming soon.",
    image: '/services/restoration.jpg',
  },
  {
    num: '03',
    title: 'Maintenance & Repair',
    sub: 'Day-to-day care',
    desc: 'Beyond restoration, we handle the everyday tasks that keep classics and exotics running properly — brakes, suspension, tune-ups. We would be pleased to help you any way we can.',
    image: '/services/maintenance.jpg',
  },
  {
    num: '04',
    title: 'Custom Engineering',
    sub: 'Outside the box',
    desc: 'Have something unusual in mind? Elliott\'s passion for vehicles runs to his core. Even if a job might be financially "foolish" or difficult to engineer, reach out — taking on the challenge is the enjoyment.',
    image: '/services/custom.jpg',
  },
  {
    num: '05',
    title: 'Laser Cleaning',
    sub: 'State-of-the-art',
    desc: 'Bespoke to Renovo, we offer state-of-the-art laser cleaning. This incredible machinery allows efficient and effective removal of corrosion or dirt from components without harming the surface underneath. Available to trade and retail customers.',
    image: '/services/laser.jpg',
  },
]

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

        <div className="services__grid">
          {services.map((s, i) => (
            <FadeIn key={s.num} delay={(i % 3) * 0.1} y={40}>
              <motion.article
                className="svc-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image area — hides gracefully if image missing */}
                <div className="svc-card__image-wrap">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="svc-card__image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.classList.add('svc-card__image-wrap--placeholder')
                    }}
                  />
                  <div className="svc-card__image-fallback">
                    <span className="svc-card__num-large">{s.num}</span>
                  </div>
                  <div className="svc-card__image-overlay" />
                </div>

                <div className="svc-card__body">
                  <div className="svc-card__head">
                    <span className="svc-card__num">{s.num}</span>
                    <span className="svc-card__sub">{s.sub}</span>
                  </div>
                  <h3 className="svc-card__title">{s.title}</h3>
                  <p className="svc-card__desc">{s.desc}</p>

                  <div className="svc-card__line" />
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
