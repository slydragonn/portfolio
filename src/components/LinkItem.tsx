import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkItemProps {
  children: ReactNode
  href: string
  isExternal?: boolean
}

const LinkItem = ({ children, href, isExternal = false }: LinkItemProps) => {
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return <Link href={href}>{children}</Link>
}

export default LinkItem
