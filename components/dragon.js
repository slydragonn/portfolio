import { Box, Image } from '@chakra-ui/react'

const Dragon = () => {
  return (
    <Box w="70%" m="0 auto" mt="70px" display="flex" justifyContent="center">
      <Image
        src="/img/all.png"
        alt="sly dragon"
        boxSize={{ base: '75%', lg: '40%', md: '50%', sm: '65%' }}
      />
    </Box>
  )
}

export default Dragon
