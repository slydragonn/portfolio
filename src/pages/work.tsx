import { Card, ProjectItem, SubTitle, Title } from 'components'
import { AnimatedShow } from 'components/animations'
import { NextPage } from 'next'
import Head from 'next/head'

const Work: NextPage = () => {
  return (
    <AnimatedShow>
      <main>
        <Head>
          <title>Alejandro&apos;s Portfolio | Work</title>
        </Head>
        <div className="mt-10">
          <Title>Work</Title>
        </div>
        <section className="flex flex-col items-center gap-20 my-20">
          <section className="flex flex-wrap justify-center gap-8 max-w-lg">
            <SubTitle>Projects</SubTitle>
            <ProjectItem
              image={{ url: '/assets/work/md-editor.png', alt: 'MarkWriter' }}
              title="MarkWriter"
              summary="Simple and Minimalist Markdown Web Editor."
              link="https://markwriter.tech/"
            />
            <ProjectItem
              image={{
                url: '/assets/work/blue-river.PNG',
                alt: 'Blue River home page design'
              }}
              title="Blue River Home Page"
              summary="Home page for an entrepreneurship project for the Medellin metropolitan area."
              link="https://blue-river.vercel.app"
            />
            <ProjectItem
              image={{
                url: '/assets/work/portfolio.PNG',
                alt: 'Alejandro Londoño Portfolio'
              }}
              title="Developer Portfolio"
              summary="This Website is made with Nextjs and TypeScript."
              link="/"
            />
            <ProjectItem
              image={{
                url: '/assets/work/barber.PNG',
                alt: 'Barber website design'
              }}
              title="Barber's Website"
              summary="Personal Website for a Barber, made with Nextjs."
              link="https://danielbarber.vercel.app/"
            />
          </section>
          <section className="flex flex-wrap justify-center gap-8 max-w-lg">
            <SubTitle>📹 Youtube Channel | @slydragonn</SubTitle>
            <Card
              image="/assets/youtube/neovim.jpg"
              title="My Neovim Setup"
              link="https://youtu.be/vkCnPdaRBE0"
            />
            <Card
              image="/assets/youtube/md.jpg"
              title="Markdown Editor with React"
              link="https://www.youtube.com/watch?v=iqH62Q7otJw"
            />
            <Card
              image="/assets/youtube/link.png"
              title="Link in Bio page"
              link="https://www.youtube.com/@slydragonn"
            />
          </section>
        </section>
      </main>
    </AnimatedShow>
  )
}

export default Work
