import { motion } from "framer-motion"
import { Children } from "models"

interface AnimatedTapProps {
  children: Children
}

const AnimatedTap = ({ children }: AnimatedTapProps) => {
  return (
    <motion.div whileTap={{scale: 0.8}}>
      {
        children
      }
    </motion.div>
  )
}

export default AnimatedTap