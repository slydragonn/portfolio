import { NavbarItem, ThemeButton } from 'styledComponents'
import { isEqual } from 'utils/equality'
import { LinkItem } from 'components'
import { useRouter } from 'next/router'
import { RiHomeLine as HomeIcon, RiMoonFill as MoonIcon } from 'react-icons/ri'
import {IoIosSunny as SunIcon } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { Children } from 'models'
import { AnimatedTap } from './animations'

type HandleTheme = {
  theme: null | 'dark' | 'light',
  toggleTheme: () => void
}

const animations = {
  hidden: { opacity: 0, y: '-20px' },
  show: {
    opacity: 1,
    y: 0
  },
  tap: {
    scale: 0.8
  },
  exit: {
    opacity: 0
  }
}
interface AnimatedItemProps {
  children: Children
  key: string | null
}

const AnimatedItem = ({ children, key }: AnimatedItemProps) => {
  return (
    <motion.div
      key={key}
      variants={animations}
      initial="hidden"
      animate="show"
      exit='exit'
      whileTap='tap'
    >
      {
        children
      }
    </motion.div>
  )
}
interface NavbarProps {
  handleTheme: HandleTheme
}

const Navbar = ({handleTheme}: NavbarProps) => {
  const { pathname } = useRouter()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <nav className="z-30 fixed top-0 left-0 flex justify-center items-center w-full h-[50px] bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white">
      <section className='flex justify-between items-center w-full md:w-[768px] h-full px-8 md:px-0'>
      <LinkItem href="/">
        <AnimatedTap>
          <HomeIcon className="w-5 h-5" />
        </AnimatedTap>
      </LinkItem>
      <ul className="flex flex-row w-[120px] justify-between">
        <AnimatedTap>
          <NavbarItem isActive={isEqual(pathname, '/work')} theme={handleTheme.theme}>
            <LinkItem href="/work">WORK</LinkItem>
          </NavbarItem>
        </AnimatedTap>
        <AnimatedTap>
          <NavbarItem isActive={isEqual(pathname, '/blog')} theme={handleTheme.theme}>
            <LinkItem href="/blog">BLOG</LinkItem>
          </NavbarItem>
        </AnimatedTap>
      </ul>
        <AnimatedItem key={handleTheme.theme}>
          <ThemeButton theme={handleTheme.theme} onClick={handleTheme.toggleTheme}>
            {
              handleTheme.theme === 'dark'
                ? <SunIcon className='w-4 h-4 text-[#1e1e1e]'/>
                : <MoonIcon className='w-4 h-4 text-[#fffbf9]'/>
            }
          </ThemeButton>
        </AnimatedItem>
        </section>
    </nav>
    </AnimatePresence>
  )
}

export default Navbar
