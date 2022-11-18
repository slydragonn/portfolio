import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="h-[50px] px-5 bg-[#1e1e1e] text-[#FFFBF9] font-semibold rounded-[5px] shadow-lg hover:-translate-y-2 transition-all duration-300">
      {children}
    </button>
  )
}

export default Button
