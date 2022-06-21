import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ImGithub } from 'react-icons/im'
import ThemeToggleButton from '../button-color-mode'

export const LinkItem = ({ href, target, children, ...params }) => {
  return (
    <NextLink href={href} passHref>
      <Link target={target} {...params}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = () => {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      w="35%"
      h="50px"
      css={{ backdropFilter: 'blur(7px) saturate(180%)' }}
      bg={useColorModeValue('rgb(241, 238, 233, 0.3)', 'rgb(56, 56, 56, 0.3)')}
      borderRadius="10"
      p="5px"
    >
      <HStack
        display={{ base: 'none', lg: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/#about">About</LinkItem>
        <LinkItem href="/projects">Projects</LinkItem>
        <LinkItem href="/blog">Blog</LinkItem>
      </HStack>
      <Box display={{ base: 'inline-block', lg: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Search database"
            icon={<HamburgerIcon />}
            bg="transparent"
          />
          <MenuList>
            <MenuItem>
              <LinkItem href="/">Home</LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem href="/#about">About</LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem href="/projects">Projects</LinkItem>
            </MenuItem>
            <MenuItem>
              <LinkItem href="/blog">Blog</LinkItem>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <LinkItem href="https://github.com/slydragonn" target="_blank">
        <ImGithub />
      </LinkItem>
      <ThemeToggleButton />
    </Box>
  )
}

export default Navbar
