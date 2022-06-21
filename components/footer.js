import { Box, Heading } from '@chakra-ui/react'
import { BsInstagram } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import { IoLogoMedium } from 'react-icons/io5'
import { LinkItem } from './header/navbar'

const Footer = () => {
  return (
    <footer>
      <Box w="70%" m="0 auto">
        <Box>
          <Heading as="h4" size="sm">
            On the web
          </Heading>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent='space-around'>
          <Box display="flex" alignItems="center" mt="20px">
            <ImGithub />
            <LinkItem
              href="https://github.com/slydragonn"
              target="_blank"
              ml="5px"
            >
              @slydragonn
            </LinkItem>
          </Box>
          <Box display="flex" alignItems="center" mt="20px">
            <BsInstagram />
            <LinkItem
              href="https://www.instagram.com/sly_dragonn/"
              target="_blank"
              ml="5px"
            >
              @sly_dragonn
            </LinkItem>
          </Box>
          <Box display="flex" alignItems="center" mt="20px">
            <IoLogoMedium/>
            <LinkItem
              href="https://medium.com/@slydragonn"
              target="_blank"
              ml="5px"
            >
              @slydragonn
            </LinkItem>
          </Box>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
