import { motion } from 'framer-motion'

export default function Logo({ size = 64, animated = false }) {
  const W = size * 1.5  // viewBox 72 wide
  const H = size

  const Wrapper = animated ? motion.svg : 'svg'
  const wrapperProps = animated ? {
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  } : {}

  return (
    <Wrapper
      width={W}
      height={H}
      viewBox="0 0 72 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Renovo Classic Engineering logo"
      {...wrapperProps}
    >
      {/* Parallelogram background — now in dark steel instead of red */}
      <path d="M18 0 L72 0 L62 48 L8 48 Z" fill="#1d1d22" />

      {/* White circle (kept) */}
      <circle cx="22" cy="24" r="20" fill="#f4ecd8" />

      {/* Speed lines — brass/cream instead of red/white */}
      <line x1="40" y1="10" x2="68" y2="6"  stroke="#b8945c" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="40" y1="15" x2="68" y2="12" stroke="#d4a96a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="20" x2="68" y2="18" stroke="#f4ecd8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="25" x2="68" y2="25" stroke="#f4ecd8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="30" x2="68" y2="32" stroke="#f4ecd8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="35" x2="68" y2="38" stroke="#d4a96a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="40" x2="68" y2="44" stroke="#b8945c" strokeWidth="1.8" strokeLinecap="round" />

      {/* RCE text — bold serif, charcoal */}
      <text x="17" y="21" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="14" fontWeight="700" fill="#0e0e0f">R</text>
      <text x="13" y="33" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="10" fontWeight="600" fill="#0e0e0f">C</text>
      <text x="25" y="33" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="10" fontWeight="600" fill="#0e0e0f">E</text>
    </Wrapper>
  )
}
