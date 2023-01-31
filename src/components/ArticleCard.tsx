import type { Category } from 'models'
import dateFormat from 'dateformat'
import { LinkItem, Tag } from 'components'

interface ArticleCardProps {
  creationDate: string
  title: string
  content: string
  categories: Category[]
  url: string
}

const ArticleCard = ({
  creationDate,
  title,
  content,
  categories,
  url
}: ArticleCardProps) => {
  const date = dateFormat(creationDate, 'yyyy·mm')
  return (
    <article>
      <div className="relative">
        <div className="absolute top-0 -left-[22px] bottom-0 m-auto w-[10px] h-[10px] bg-[#b8b8b8] rounded-lg"></div>
        <Tag width="max-content">{date}</Tag>
      </div>
      <LinkItem href={url} isExternal>
        <h3 className="text-xl font-semibold mt-4 text-black dark:text-white">
          {title}
        </h3>
      </LinkItem>
      <p className="text-sm font-light text-black dark:text-white mt-2">
        {content}
      </p>
      <div>
        {categories.map(category => (
          <span
            key={title + category.name}
            className="text-xs font-extralight mr-2 text-black dark:text-white"
          >
            #{category.name}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ArticleCard
