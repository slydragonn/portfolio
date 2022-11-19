interface TagProps {
  children: string
  width: string
}

const Tag = ({ children, width }: TagProps) => {
  return (
    <div
      style={{ width: width }}
      className="flex justify-center items-center p-2 bg-black text-white font-semibold rounded-md text-center border-[2px] border-black dark:border-white"
    >
      {children}
    </div>
  )
}

export default Tag
