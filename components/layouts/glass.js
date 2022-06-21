import { Box, useColorModeValue } from '@chakra-ui/react'

const Glass = ({ children, ...params }) => {
  return (
    <Box
      bg={useColorModeValue('rgb(241, 238, 233, 0.3)', 'rgb(56, 56, 56, 0.3)')}
      p="20px 20px 30px 20px"
      backdropFilter="blur(10px) saturate(180%)"
      borderRadius="10px"
      boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
      position="relative"
      zIndex={2}
      {...params}
    >
      {children}
    </Box>
  )
}

export default Glass
