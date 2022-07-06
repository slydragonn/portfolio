import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Fireball = () => {
  return (
      <motion.img
        src="/img/fireball.png"
        alt="Ellipse"
        style={{
          position: 'absolute',
          width: '120px',
          zIndex: 0,
          top: 'calc(50% - 60px)',
          left: 'calc(50% - 60px)'
          }}
        animate={{ 
          translateY: [10, -25],
          translateX: [10, -10],
          rotate: [5, -5]
        }}
        transition={{ 
          type: "spring",
          mass: 0.75,
          stiffness: 100,
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
         }}
      />
  )
}

const Glass = ({ children, ...params }) => {
  return (
    <div style={{zIndex: 2, position: 'relative'}}>
      <Fireball />
      <Box
        bg={useColorModeValue('rgb(241, 238, 233, 0.3)', 'rgb(56, 56, 56, 0.3)')}
        p="20px 20px 30px 20px"
        backdropFilter="blur(7px) saturate(180%)"
        borderRadius="10px"
        boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
        position="relative"
        zIndex="2"
        userSelect='none'
        {...params}
      >
        {children}
      </Box>
    </div>
  )
}

export default Glass
