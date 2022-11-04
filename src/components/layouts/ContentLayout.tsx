import { ReactNode } from 'react'

interface ContentLayoutProps {
  children: ReactNode
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <div className='flex justify-center items-center ml-0 md:ml-[80px] mb-[80px] md:mb-0 px-5 md:px-14 py-6'>
      <div className='w-full md:w-[896px]'>
      {children}
      </div>
    </div>
  )
}

export default ContentLayout