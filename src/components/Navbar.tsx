import { NavbarItem } from "styledComponents"
import { isEqual } from "utils/equality"
import { LinkItem } from "components"
import { useRouter } from "next/router"
import { RiHomeFill as HomeIcon, RiBookFill as BlogIcon } from 'react-icons/ri'
import { FaUser as AboutIcon, FaFolder as WorkIcon } from 'react-icons/fa'


const Navbar = () => {
  const {pathname} = useRouter()

  return (
      <nav className="z-30 fixed top-auto md:top-0 left-auto md:left-0 bottom-0 md:bottom-0 w-full md:w-[60px] h-[60px] md:h-full bg-[#111111]/90 md:bg-[#111111] backdrop-blur-sm md:backdrop-blur-none border-top-[#606060] border-t md:border-t-0 border-r-0 md:border-r border-r-[#606060]">
        <ul className="flex flex-row md:flex-col justify-around items-center w-full h-full">
          <NavbarItem isActive={isEqual(pathname, '/')}>
            <LinkItem href="/">
              <HomeIcon className="w-5 h-5"/>
            </LinkItem>
          </NavbarItem>
          <NavbarItem isActive={isEqual(pathname, '/about')}>
            <LinkItem href="/about">
              <AboutIcon className="w-5 h-5" />
            </LinkItem>
          </NavbarItem>
          <NavbarItem isActive={isEqual(pathname, '/work')}>
            <LinkItem href="/work">
              <WorkIcon className="w-5 h-5" />
            </LinkItem>
          </NavbarItem>
          <NavbarItem isActive={isEqual(pathname, '/blog')}>
            <LinkItem href="/blog">
              <BlogIcon className="w-5 h-5" />
            </LinkItem>
          </NavbarItem>
        </ul>
      </nav>
  )
}

export default Navbar