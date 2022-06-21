import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { DragonSvg } from '../svg/list-svg'
import Navbar from './navbar'

const Header = () => {
  return (
    <Box
      as="header"
      w="100%"
      h="50px"
      p="5"
      display="flex"
      alignItems="center"
      pos="fixed"
      top="0"
      left="0"
      zIndex={3}
      justifyContent="space-around"
      mt="15px"
    >
      <Box display="flex" alignItems="center">
        <DragonSvg
          color={useColorModeValue('rgb(56, 56, 56)', 'rgb(241, 238, 233)')}
        />
        <Heading ml="5px" as="h1" size="lg">
          Alejandro Londoño
        </Heading>
      </Box>
      <Navbar />
    </Box>
  )
}

export default Header
