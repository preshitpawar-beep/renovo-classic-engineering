import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import './Instagram.css'

const IG_HANDLE = 'renovo_classic_engineering'
const IG_URL = 'https://www.instagram.com/renovo_classic_engineering/'

/* Real posts pulled from @renovo_classic_engineering, newest first.
   Photos live in public/instagram/. When Elliott adds a new post, save the
   photo as public/instagram/post-7.jpg and add an entry to the TOP of this
   array with its post link. */
const posts = [
  {
    image: '/instagram/post-1.jpg',
    href: 'https://www.instagram.com/p/DbjfP5AiIPF/',
    label: 'Jaguar XJS · in for repair',
    alt: 'Jaguar XJS convertible in for a seat-switch repair',
  },
  {
    image: '/instagram/post-2.jpg',
    href: 'https://www.instagram.com/p/DbjZD-NDiFX/',
    label: 'Air-cooled care',
    alt: 'Classic air-cooled Volkswagen camper van',
  },
  {
    image: '/instagram/post-3.jpg',
    href: 'https://www.instagram.com/p/DaOfIqUDmFt/',
    label: 'A proper British pitstop',
    alt: 'Classic cars gathered at a British car meet',
  },
  {
    image: '/instagram/post-4.jpg',
    href: 'https://www.instagram.com/p/DZStp-hCKGT/',
    label: 'Alfa Spider · rewire & upgrades',
    alt: 'Alfa Spider interior during a full rewire',
  },
  {
    image: '/instagram/post-5.jpg',
    href: 'https://www.instagram.com/p/DYX3p9LDgGw/',
    label: 'Servicing & upgrades',
    alt: 'Modified classic sports car outside the workshop',
  },
  {
    image: '/instagram/post-6.jpg',
    href: 'https://www.instagram.com/p/DYVUj_rjszD/',
    label: 'Engine work · Alfa twin-cam',
    alt: 'Alfa Romeo twin-cam engine rebuild',
  },
]

export default function Instagram() {
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
          <div className="insta__grid">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="insta__cell insta__cell--real"
                aria-label={post.label}
              >
                <img src={post.image} alt={post.alt} loading="lazy" className="insta__cell-img" />
                <div className="insta__cell-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  <span>{post.label}</span>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="insta__note">
            New work lands on Instagram first — follow <a href={IG_URL} target="_blank" rel="noopener noreferrer">@{IG_HANDLE}</a> for the latest from the workshop.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
