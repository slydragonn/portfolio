import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Heading, Image, Link, Text } from '@chakra-ui/react'
import ArticleStack from './article-stack'

const ProjectTemplate = ({ image, summary, title, stack}) => {
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
        <Link href="/" isExternal>
          {title} <ExternalLinkIcon />
        </Link>
    </>
  )
}

export default ProjectTemplate