import { GridItem } from '@chakra-ui/react'
import { GridLayout, PageLayout, Post } from '../../components/layouts/article'
import Layout from '../../components/layouts/layout'

const Blog = () => {
  return (
    <Layout>
      <PageLayout title="Posts">
        <GridLayout>
          <Post
            img="/assets/blog-javascript.jpg"
            alt="JavaScript"
            title="El porder del Scope y su utilidad para un código sostenible."
            link="https://medium.com/@slydragonn"
            as={GridItem}
          />
        </GridLayout>
      </PageLayout>
    </Layout>
  )
}

export default Blog
