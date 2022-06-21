import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { PageLayout } from '../../components/layouts/article'
import Layout from '../../components/layouts/layout'

const Hello = () => {
  return (
    <Layout>
      <PageLayout title="Secret Project">
        <Image src="/img/mac.jpg" alt="secret project" borderRadius="15px" />
        <Text as="p" fontSize="lg" mt="30px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industr standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Heading as="h3" size="sm" mt="30px">
          Technologies
        </Heading>
        <Stack direction="row" m="20px 0 30px 0">
          <Badge variant="outline" colorScheme="green">
            JavaScript
          </Badge>
          <Badge variant="outline" colorScheme="red">
            Sass
          </Badge>
          <Badge variant="outline" colorScheme="purple">
            React
          </Badge>
        </Stack>
        <Link href="/" isExternal>
          Secret Project <ExternalLinkIcon />
        </Link>
      </PageLayout>
    </Layout>
  )
}

export default Hello
