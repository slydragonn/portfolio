import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  Link,
  Text
} from '@chakra-ui/react'
import { LinkItem } from '../header/navbar'

const Article = ({ img, alt, title, text, tech, link, extLink, ...props }) => {
  return (
    <Box {...props} w="100%" textAlign='center'>
      <Image src={img} alt={alt} borderRadius="15px" />
      <Box>
        <LinkItem href={link}>
          <Heading as="h3" size="sm" mt='5px'>
            {title}
          </Heading>
        </LinkItem>
        <Text mt='10px'>{text}</Text>
        <Box as="section">
          {tech.map(skill => (
            <Badge key={skill} size="md" colorScheme="teal" mr="5px">
              {skill}
            </Badge>
          ))}
        </Box>
        <Link href={extLink} isExternal>
          {title} <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Box>
  )
}

export const Post = ({ img, alt, title, link, ...props }) => {
  return (
    <Box {...props} w="100%">
      <Image src={img} alt={alt} borderRadius="15px" mr="20px" />
      <Box m="auto 0">
        <Text as="h3" fontSize="lg">
          {title}
        </Text>
        <Link href={link} isExternal>
          Read <ExternalLinkIcon mx="2px" />
        </Link>
      </Box>
    </Box>
  )
}

export const GridLayout = ({ children }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={10}
    >
      {children}
    </Grid>
  )
}

export const PageLayout = ({ title, children }) => {
  return (
    <Box
      as="section"
      m="40px 0 100px 0"
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Divider w="70%" />
      <Box as="section" w="70%">
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Container maxW="650px" mt="40px">
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default Article
