import Image from 'next/image'
import { LinkItem, Tag } from 'components'

type Image = {
  url: string
  alt: string
}

interface ProjectItemProps {
  image: Image
  title: string
  summary: string
  link: string
}

const ProjectItem = ({ image, title, link, summary }: ProjectItemProps) => {
  return (
    <LinkItem href={link} isExternal={true}>
      <article className="flex flex-col items-center w-[240px]">
        <Image
          src={image.url}
          alt={image.alt}
          width={500}
          height={500}
          style={{
            width: '240px',
            height: '150px',
            borderRadius: '5px',
            objectFit: 'cover',
            padding: '2px'
          }}
          className='border-[3px] border-black dark:border-white'
        />
        <div className="flex flex-col justify-center items-center gap-2 w-full mt-4">
          <Tag width="100%">{title}</Tag>
          <p className="text-center text-black dark:text-white">{summary}</p>
        </div>
      </article>
    </LinkItem>
  )
}

export default ProjectItem
