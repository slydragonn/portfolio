import {Image, LinkItem, Tag} from "components"

interface CardProps {
  image: string
  title: string
  tags: string[]
  link: string
}

const Card = ({image, title, tags, link}: CardProps) => {
  return (
    <article className="overflow-hidden border-[3px] rounded-[5px] border-[#1e1e1e]">
      <LinkItem href={link} isExternal={true}>
        <Image
          src={image}
          alt="slydragonn youtube channel"
          style={{width: '350px', height: '200px'}}
        />
      </LinkItem>
      <div className="p-2">
        <span className="font-semibold">{title}</span>
        <ul className="flex mt-1">
          {
            tags.map((tag, index) => (
              <li key={tag + index} className='mr-3'>
                <Tag width='min-content'>{tag}</Tag>
              </li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}

export default Card