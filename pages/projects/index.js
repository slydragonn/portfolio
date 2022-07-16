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
            img="/assets/markwriter.jpg"
            alt="mark writer"
            title="Simple Markdown Editor"
            text="Trabaja con codemirror y marked para convertir código de Markdown a HTML"
            tech={['TypeScript', 'NextJS', 'Codemirror']}
            link="/projects/mark-writer"
            extLink="https://mark-editor.vercel.app/"
            as={GridItem}
          />
        </GridLayout>
      </PageLayout>
    </Layout>
  )
}

export default Projects
