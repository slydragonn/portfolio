import { SocialNetworks } from 'components'

const Footer = () => {
  const fullYear = new Date().getFullYear()

  return (
    <footer className="flex flex-col items-center justify-around w-full h-[80px]">
      <SocialNetworks />
      <span className="text-black dark:text-white text-center text-sm font-thin p-3">
        © {fullYear} Alejandro Londoño. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer
