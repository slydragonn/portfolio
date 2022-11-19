import { NavbarItem, ThemeButton } from 'styledComponents'
import { isEqual } from 'utils/equality'
import { LinkItem } from 'components'
import { useRouter } from 'next/router'
import { RiHomeLine as HomeIcon, RiMoonFill as MoonIcon } from 'react-icons/ri'
import {IoIosSunny as SunIcon } from 'react-icons/io'

type HandleTheme = {
  theme: null | 'dark' | 'light',
  toggleTheme: () => void
}
interface NavbarProps {
  handleTheme: HandleTheme
}

const Navbar = ({handleTheme}: NavbarProps) => {
  const { pathname } = useRouter()

  return (
    <nav className="z-30 fixed top-0 left-0 flex justify-around items-center w-full h-[50px] bg-white/90 dark:bg-black/90 backdrop-blur-sm text-black dark:text-white">
      <LinkItem href="/">
        <HomeIcon className="w-5 h-5" />
      </LinkItem>
      <ul className="flex flex-row w-[120px] justify-between">
        <NavbarItem isActive={isEqual(pathname, '/work')} theme={handleTheme.theme}>
          <LinkItem href="/work">WORK</LinkItem>
        </NavbarItem>
        <NavbarItem isActive={isEqual(pathname, '/blog')} theme={handleTheme.theme}>
          <LinkItem href="/blog">BLOG</LinkItem>
        </NavbarItem>
      </ul>
        {
          handleTheme.theme === 'dark'
            ? (
              <ThemeButton theme={handleTheme.theme} onClick={handleTheme.toggleTheme}>
                <SunIcon className="w-4 h-4 text-[#1e1e1e]" />
              </ThemeButton>
            )
            : (
              <ThemeButton theme={handleTheme.theme}  onClick={handleTheme.toggleTheme}>
                <MoonIcon className="w-4 h-4 text-[#fffbf9]" />
              </ThemeButton> 
            )
        }
    </nav>
  )
}

export default Navbar
