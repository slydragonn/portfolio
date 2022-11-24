interface SubTitlePros {
  children: string
}

const SubTitle = ({children}:SubTitlePros) => {
  return (
    <div className="w-full border-b border-black dark:border-[#606060] mb-6 text-center">
      <h3 className="font-semibold text-black dark:text-white">{children}</h3>
    </div>
  )
}

export default SubTitle