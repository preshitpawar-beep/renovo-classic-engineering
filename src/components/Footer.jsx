import { motion } from 'framer-motion'
import Logo from '../components/Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={48} />
          <div className="footer__brand-text">
            <div className="footer__name">Renovo Classic Engineering</div>
            <div className="footer__tag">Premium service, on a personal level.</div>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__col-title">Visit</h4>
            <p>Coming soon to Dallas–Fort Worth, Texas.</p>
            <p>Currently based in England.</p>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <p>
              <a href="https://www.instagram.com/ellcof/" target="_blank" rel="noopener noreferrer">
                Instagram &mdash; @ellcof
              </a>
            </p>
            <p>
              <a href="mailto:hello@renovoclassic.com">hello@renovoclassic.com</a>
            </p>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Sitemap</h4>
            <p><a href="#about">About Elliott</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#careers">Careers</a></p>
            <p><a href="#enquiry">Pre-register</a></p>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">&copy; 2025 Renovo Classic Engineering. All rights reserved.</p>
        <p className="footer__made">
          <span className="italic-serif">Built with care</span>
          <span className="footer__dot" />
          England → Texas
        </p>
      </div>
    </footer>
  )
}
