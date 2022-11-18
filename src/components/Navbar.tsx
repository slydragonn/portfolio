import { NavbarItem } from 'styledComponents'
import { isEqual } from 'utils/equality'
import { LinkItem } from 'components'
import { useRouter } from 'next/router'
import { RiHomeLine as HomeIcon, RiMoonFill } from 'react-icons/ri'

const Navbar = () => {
  const { pathname } = useRouter()

  return (
    <nav className="z-30 fixed top-0 left-0 flex justify-around items-center w-full h-[50px] bg-[#FFFBF9]/80 backdrop-blur-sm">
      <LinkItem href="/">
        <HomeIcon className="w-5 h-5 text-[#1e1e1e]" />
      </LinkItem>
      <ul className="flex flex-row w-[120px] justify-between">
        <NavbarItem isActive={isEqual(pathname, '/work')}>
          <LinkItem href="/work">WORK</LinkItem>
        </NavbarItem>
        <NavbarItem isActive={isEqual(pathname, '/blog')}>
          <LinkItem href="/blog">BLOG</LinkItem>
        </NavbarItem>
      </ul>
      <RiMoonFill className="w-5 h-5 text-[#1e1e1e]" />
    </nav>
  )
}

export default Navbar
