import { Heading, Image, Link, Text } from '@chakra-ui/react'
import { ImGithub } from 'react-icons/im'
import ArticleStack from './article-stack'

const ProjectTemplate = ({ image, summary, title, stack, link}) => {
  return (
    <>
      <Image src={image} alt={title} borderRadius="15px" />
        <Text as="p" fontSize="lg" mt="30px">
          {summary}
        </Text>
        <Heading as="h3" size="sm" mt="30px">
          Technologies
        </Heading>
        <ArticleStack stack={stack} />
        <Link href={link} isExternal>
          <ImGithub />
        </Link>
    </>
  )
}

export default ProjectTemplate