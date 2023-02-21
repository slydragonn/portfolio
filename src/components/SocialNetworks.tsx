import {
  SiYoutube,
  SiLinkedin,
  SiGithub,
  SiMedium
} from 'react-icons/si'
import { FaDev } from 'react-icons/fa'
import LinkItem from './LinkItem'

const SocialNetworks = () => {
  return (
    <ul className="flex w-52 justify-between items-center text-black dark:text-white">
      <li>
        <LinkItem href="https://www.youtube.com/@slydragonn" isExternal={true}>
          <SiYoutube />
        </LinkItem>
      </li>
      <li>
        <LinkItem href="https://www.linkedin.com/in/alejolg/" isExternal={true}>
          <SiLinkedin />
        </LinkItem>
      </li>
      <li>
        <LinkItem href="https://github.com/slydragonn" isExternal={true}>
          <SiGithub />
        </LinkItem>
      </li>
      <li>
        <LinkItem href='https://dev.to/slydragonn' isExternal={true}><FaDev /></LinkItem>
      </li>
      <li>
        <LinkItem href="https://medium.com/@slydragonn" isExternal={true}>
          <SiMedium />
        </LinkItem>
      </li>
    </ul>
  )
}

export default SocialNetworks
