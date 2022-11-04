import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='max-w-[1440px]'>
      {
        children
      }
    </div>
  )
}

export default MainLayout