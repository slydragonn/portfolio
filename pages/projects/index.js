import { GridItem } from '@chakra-ui/react'
import Article, {
  GridLayout,
  PageLayout
} from '../../components/layouts/article'
import Layout from '../../components/layouts/layout'

const Projects = () => {
  return (
    <Layout>
      <PageLayout title="Projects">
        <GridLayout>
          <Article
            img="/img/mac.jpg"
            alt="prueba"
            title="Prueba Articulo"
            text="Esto es un prueba de un articulo"
            tech={['javascript', 'react', 'sass']}
            link="/projects/hello"
            extLink="/"
            as={GridItem}
          />
          <Article
            img="/img/mac.jpg"
            alt="prueba"
            title="Prueba Articulo"
            text="Esto es un prueba de un articulo"
            tech={['javascript', 'react', 'sass']}
            link="/"
            extLink="/"
            as={GridItem}
          />
          <Article
            img="/img/mac.jpg"
            alt="prueba"
            title="Prueba Articulo"
            text="Esto es un prueba de un articulo"
            tech={['javascript', 'react', 'sass']}
            link="/"
            extLink="/"
            as={GridItem}
          />
        </GridLayout>
      </PageLayout>
    </Layout>
  )
}

export default Projects
