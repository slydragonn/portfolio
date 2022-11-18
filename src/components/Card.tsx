import { Image, LinkItem, Tag } from 'components'

interface CardProps {
  image: string
  title: string
  link: string
}

const Card = ({ image, title, link }: CardProps) => {
  return (
    <article>
      <LinkItem href={link} isExternal={true}>
        <Image
          src={image}
          alt="slydragonn youtube channel"
          style={{
            width: '350px',
            height: '200px',
            borderRadius: '5px',
            border: '3px solid #1e1e1e'
          }}
        />
      </LinkItem>
      <div className="mt-2">
        <Tag width="100%">{title}</Tag>
      </div>
    </article>
  )
}

export default Card
