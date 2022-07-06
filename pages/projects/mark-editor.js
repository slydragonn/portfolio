import { PageLayout } from '../../components/layouts/article'
import Layout from '../../components/layouts/layout'
import ProjectTemplate from '../../components/project-template'

const Hello = () => {
  return (
    <Layout>
      <PageLayout title="Secret Project">
        <ProjectTemplate
          image='/assets/mark-editor.png'
          summary='Mark Editor es un simple y sencillo editor de markdown,
           con el cual puedes visualizar como es en HTML, ademas puedes copiar el código Markdown y HTML
            o exportarlos a sus respectivos archivos.'
          title='mark editor'
          stack={['TypeScript', 'NextJS', 'Codemirror']}
          link='https://github.com/slydragonn/mark-editor'
        />
      </PageLayout>
    </Layout>
  )
}

export default Hello
