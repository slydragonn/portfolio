import { GridItem } from '@chakra-ui/react'
import { GridLayout, PageLayout, Post } from '../../components/layouts/article'
import Layout from '../../components/layouts/layout'

const Blog = () => {
  return (
    <Layout>
      <PageLayout title="Posts">
        <GridLayout>
          <Post
            img="/img/mac.jpg"
            alt="prueba post blog"
            title="Esto es una prueba de un post"
            link="/"
            as={GridItem}
          />
          <Post
            img="/img/mac.jpg"
            alt="prueba post blog"
            title="Esto es una prueba de un post"
            link="/"
            as={GridItem}
          />
        </GridLayout>
      </PageLayout>
    </Layout>
  )
}

export default Blog
