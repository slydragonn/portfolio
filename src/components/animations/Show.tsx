import { motion } from 'framer-motion'
import { Children } from 'models'

const show = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

interface AnimatedShowProps {
  children: Children
}

const AnimatedShow = ({ children }: AnimatedShowProps) => {
  return (
    <motion.div
      variants={show}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedShow
