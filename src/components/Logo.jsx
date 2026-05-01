import { motion } from 'framer-motion'

/**
 * Logo — uses the official RCE logo PNG.
 * `size` controls height in pixels; width auto-sized to aspect ratio.
 */
export default function Logo({ size = 48, animated = false }) {
  const Wrapper = animated ? motion.img : 'img'
  const wrapperProps = animated ? {
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  } : {}

  return (
    <Wrapper
      src="/RCElogo.png"
      alt="Renovo Classic Engineering"
      style={{
        height: size,
        width: 'auto',
        display: 'block',
        objectFit: 'contain',
      }}
      {...wrapperProps}
    />
  )
}
