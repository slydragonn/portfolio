import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex justify-center w-full">
      <div className="w-[768px] mt-[50px]">{children}</div>
    </main>
  )
}

export default MainLayout
