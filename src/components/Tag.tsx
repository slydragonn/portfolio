interface TagProps {
  children: string
  width: string
}

const Tag = ({ children, width }: TagProps) => {
  return (
    <div
      style={{ width: width }}
      className="flex justify-center items-center p-2 bg-[#1e1e1e] text-[#FFFBF9] font-semibold rounded-md text-center"
    >
      {children}
    </div>
  )
}

export default Tag
