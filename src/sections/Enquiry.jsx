import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import './Enquiry.css'

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setError('')
    setSending(true)

    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const info = await res.json().catch(() => ({}))
        throw new Error(info.error || 'Something went wrong.')
      }
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="enquiry" id="enquiry">
      <div className="container">
        <div className="enquiry__grid">
          <div className="enquiry__copy">
            <FadeIn>
              <span className="eyebrow">Pre-register Interest</span>
            </FadeIn>

            <h2 className="enquiry__title">
              <AnimatedText text="Own a classic," el="span" className="enquiry__title-line" />
              <AnimatedText text="unique," el="span" className="enquiry__title-line" delay={0.1} />
              <AnimatedText text="or exotic" el="span" className="enquiry__title-line" delay={0.2} />
              <AnimatedText text="car?" el="span" className="enquiry__title-line enquiry__title-line--italic" delay={0.3} />
            </h2>

            <FadeIn delay={0.4}>
              <p className="enquiry__lead">
                Pre-register your interest below to stay updated with our journey, or to find out more
                about the services we hope to offer you.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="enquiry__lead">
                Even if your car is in good condition, please feel welcome to <em>pop in for a chat,
                look around, or just have a coffee.</em>
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="enquiry__contacts">
                <div className="contact-row">
                  <span className="contact-row__label">Currently</span>
                  <span className="contact-row__value">🇬🇧 England</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row__label">Heading to</span>
                  <span className="contact-row__value">🇺🇸 Austin, Texas</span>
                </div>
                <div className="contact-row">
                  <span className="contact-row__label">Instagram</span>
                  <a className="contact-row__value" href="https://www.instagram.com/renovo_classic_engineering/" target="_blank" rel="noopener noreferrer">@renovo_classic_engineering</a>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} y={50} className="enquiry__form-wrap">
            <form className="enquiry__form" onSubmit={handleSubmit}>
              <h3 className="enquiry__form-title">Interest &amp; Queries</h3>

              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your full name" required />
              </div>

              <div className="field">
                <label htmlFor="vehicle">Vehicle</label>
                <input id="vehicle" name="vehicle" type="text" placeholder="e.g. 1972 Jaguar E-Type" />
              </div>

              <div className="field">
                <label htmlFor="works">Works required</label>
                <textarea id="works" name="works" placeholder="What would you like done? Or just say hello." rows="3" />
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>

              <div className="field">
                <label htmlFor="coffee">
                  Coffee order
                  <span className="field__hint italic-serif">(yes, really)</span>
                </label>
                <input id="coffee" name="coffee" type="text" placeholder="Flat white, no sugar..." />
              </div>

              <p className="enquiry__consent">
                By submitting your enquiry, you agree that we may contact you regarding
                your request and provide relevant updates about our business, services, and offers.
                You may withdraw your consent at any time.
              </p>

              <motion.button
                type="submit"
                className="enquiry__submit"
                whileHover={sending ? undefined : { y: -2 }}
                whileTap={sending ? undefined : { scale: 0.98 }}
                disabled={sending}
                style={sending ? { opacity: 0.65, cursor: 'wait' } : undefined}
              >
                {sending ? 'Sending…' : 'Send Enquiry'}
                {!sending && (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="13 6 19 12 13 18" />
                  </svg>
                )}
              </motion.button>

              {error && (
                <p className="enquiry__error" role="alert">{error}</p>
              )}
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="enquiry__success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  ✓ Thank you. Elliott will be in touch personally.
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
