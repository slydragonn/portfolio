import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-black dark:text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase text-center">
      {children}
    </h1>
  )
}

export default Title
