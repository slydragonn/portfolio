import { PageLayout } from '../../components/layouts/article'
import Layout from '../../components/layouts/layout'
import ProjectTemplate from '../../components/project-template'

const Hello = () => {
  return (
    <Layout>
      <PageLayout title="Mark Writer">
        <ProjectTemplate
          image='/assets/editor.png'
          summary='Mark Writer es un simple y sencillo Editor Web de Markdown,
           con el cual puedes visualizar ccódigo Markdown a HTML, ademas puedes copiar el código Markdown y HTML
            o exportarlos a sus respectivos archivos.'
          title='mark writer'
          stack={['TypeScript', 'NextJS', 'Codemirror']}
          link='https://github.com/slydragonn/mark-editor'
        />
      </PageLayout>
    </Layout>
  )
}

export default Hello
