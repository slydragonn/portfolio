import Image from 'next/image'
import { Button, LinkItem, Tag } from 'components'

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
    <article className="flex flex-col md:flex-row justify-between items-center w-full px-2 sm:px-5 mb-20">
      <Image
        src={image.url}
        alt={image.alt}
        width={500}
        height={500}
        style={{
          width: '350px',
          height: '200px',
          borderRadius: '5px',
          border: '3px solid #1e1e1e'
        }}
      />
      <div className="flex flex-col justify-between items-center md:items-start w-full sm:w-[350px] h-[200px] mt-4 md:mt-0">
        <Tag width="100%">{title}</Tag>
        <p className="text-center md:text-left">{summary}</p>
        <Button>
          <LinkItem href={link} isExternal={true}>
            VISIT
          </LinkItem>
        </Button>
      </div>
    </article>
  )
}

export default ProjectItem
