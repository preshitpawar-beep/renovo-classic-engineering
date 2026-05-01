import { motion } from 'framer-motion'

/**
 * AnimatedText — splits text into words, animates each word sliding up on view.
 * Use for hero headlines, section titles, anywhere copy enters viewport.
 */
export default function AnimatedText({
  text,
  el: Wrapper = 'h2',
  className = '',
  delay = 0,
  staggerDelay = 0.04,
  splitBy = 'word',  // 'word' or 'char'
}) {
  const items = splitBy === 'char' ? text.split('') : text.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      y: '110%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <Wrapper className={className} aria-label={text}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              paddingBottom: '0.05em',
            }}
          >
            <motion.span
              variants={itemVariants}
              style={{ display: 'inline-block' }}
            >
              {item}
              {splitBy === 'word' && i < items.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  )
}
