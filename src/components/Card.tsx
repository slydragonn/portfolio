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
            width: '240px',
            height: '150px',
            borderRadius: '5px',
            objectFit: 'cover'
          }}
          className='border-2 border-black dark:border-white'
        />
      </LinkItem>
      <div className="mt-3">
        <Tag width="100%">{title}</Tag>
      </div>
    </article>
  )
}

export default Card
