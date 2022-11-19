import { ProjectItem, Title } from 'components'
import { NextPage } from 'next'
import Head from 'next/head'

const Work: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Alejandro&apos;s Portfolio | Work</title>
      </Head>
      <div className="mt-10">
        <Title>Work</Title>
      </div>
      <section className="mt-20">
        <ProjectItem
          image={{
            url: '/assets/work/youtube-min.png',
            alt: 'slydragonn youtube channel'
          }}
          title="Latest Youtube Video"
          summary="My videos are about how I program different types of projects."
          link="https://www.youtube.com/@slydragonn"
        />
        <ProjectItem
          image={{
            url: '/assets/work/blue-river.png',
            alt: 'Blue River home page design'
          }}
          title="Blue River Home Page"
          summary="Home page for an entrepreneurship project for the Medellin metropolitan area."
          link="https://blue-river.vercel.app"
        />
        <ProjectItem
          image={{
            url: '/assets/work/portfolio.png',
            alt: 'Alejandro Londoño Portfolio'
          }}
          title="Developer Portfolio"
          summary="This Website is made with Nextjs and TypeScript."
          link="/"
        />
        <ProjectItem
          image={{
            url: '/assets/work/barber.png',
            alt: 'Barber website design'
          }}
          title="Barber's Website"
          summary="Personal Website for a Barber, made with Nextjs."
          link="https://danielbarber.vercel.app/"
        />
        <ProjectItem
          image={{ url: '/assets/work/markwriter.jpg', alt: 'Mark Writer' }}
          title="Markdown Web Editor"
          summary="Simple and Minimalist Markdown Web Editor."
          link="https://markwriter.tech/"
        />
      </section>
    </main>
  )
}

export default Work
