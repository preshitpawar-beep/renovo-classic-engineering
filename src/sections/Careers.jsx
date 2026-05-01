import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import './Careers.css'

const roles = [
  {
    title: 'Admin / Customer Liaison',
    salary: '~$40k starting',
    holiday: '30 days paid',
    extras: '+ Thanksgiving & Independence Day',
    desc: 'Ordering parts, creating invoices, and communicating with clients. Automotive knowledge a bonus; knowledge of American accounting practice a necessity.',
  },
  {
    title: 'Technician',
    salary: '~$60k starting',
    holiday: '30 days paid',
    extras: '+ Thanksgiving & Independence Day',
    desc: 'General automotive knowledge with qualifications required, plus experience in specialist roles. Classic or custom car experience strongly preferred. Patience, organization, and any special skills welcomed.',
  },
]

export default function Careers() {
  return (
    <section className="careers" id="careers">
      <div className="container">
        <div className="careers__grid">
          <div>
            <FadeIn>
              <span className="eyebrow">Join the workshop</span>
            </FadeIn>

            <h2 className="careers__title">
              <AnimatedText text="A fledgling" el="span" className="careers__title-line" />
              <AnimatedText text="business," el="span" className="careers__title-line" delay={0.1} />
              <AnimatedText text="growing" el="span" className="careers__title-line careers__title-line--italic" delay={0.2} />
              <AnimatedText text="roots." el="span" className="careers__title-line careers__title-line--italic" delay={0.3} />
            </h2>

            <FadeIn delay={0.4}>
              <p className="careers__lead">
                Renovo Classic Engineering hopes to integrate with the local Austin community —
                not only by offering a service, but by providing meaningful employment.
                Starting small, with plans to expand.
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <p className="careers__note">
                <span className="careers__note-tag">Note</span>
                Salaries are estimated pending further research into the US market. We're committed to
                fair, competitive compensation.
              </p>
            </FadeIn>
          </div>

          <div className="careers__roles">
            {roles.map((role, i) => (
              <FadeIn key={role.title} delay={0.3 + i * 0.15} y={40}>
                <motion.article
                  className="role-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="role-card__head">
                    <h3 className="role-card__title">{role.title}</h3>
                    <span className="role-card__salary">{role.salary}</span>
                  </div>

                  <p className="role-card__desc">{role.desc}</p>

                  <div className="role-card__perks">
                    <div className="role-card__perk">
                      <span className="perk-label">Holiday</span>
                      <span className="perk-value">{role.holiday}</span>
                    </div>
                    <div className="role-card__perk">
                      <span className="perk-label">Extras</span>
                      <span className="perk-value">{role.extras}</span>
                    </div>
                  </div>

                  <a href="#enquiry" className="role-card__cta">
                    Apply via Enquiries
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="13 6 19 12 13 18" />
                    </svg>
                  </a>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
