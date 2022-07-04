import { PageLayout } from '../../components/layouts/article'
import Layout from '../../components/layouts/layout'
import ProjectTemplate from '../../components/project-template'

const Hello = () => {
  return (
    <Layout>
      <PageLayout title="Secret Project">
        <ProjectTemplate
          image='/img/mac.jpg'
          summary='Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industr standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.'
          title='Secret Project'
          stack={['JavaScript', 'Sass', 'React']}
        />
      </PageLayout>
    </Layout>
  )
}

export default Hello
