import {
  Button,
  LinkItem,
  SocialNetworks,
  Tag,
  Title,
  Image,
  Card
} from 'components'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alejandro&apos;s Portfolio | Home</title>
        <meta name="description" content="Alejandro's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex flex-col items-center">
        <section
          style={{ height: 'calc(100vh - 50px)' }}
          className="flex flex-col items-center justify-center px-3"
        >
          <Title>Alejandro Londoño</Title>
          <p className="uppercase font-thin text-base sm:text-xl md:text-2xl mb-2 text-black dark:text-white text-center">
            Front-End Developer
          </p>
          <SocialNetworks />
          <p className="max-w-lg text-center font-extralight my-5 text-black dark:text-white">
            Hi! I&apos;m a Front-End Developer from Medellín, Colombia. I
            specialize in front-end apps with JavaScript and React.
          </p>
          <Button>
            <LinkItem href="/work">MY PORTFOLIO</LinkItem>
          </Button>
        </section>
        <div className="w-full border-b border-black dark:border-[#606060] mb-6 text-center">
          <h3 className="font-semibold text-black dark:text-white">About me</h3>
        </div>
        <section className="flex flex-col items-center mb-20 p-3">
          <Image
            src="/alejo.png"
            alt="Alejandro Londoño Picture"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '5px',
              marginBottom: '20px'
            }}
          />
          <Tag width="auto">Hi! I&apos;m an Indie Front-End Developer</Tag>
          <p className="max-w-2xl font-light text-center mt-10 text-black dark:text-white">
            I&apos;m an Indie Front-End Developer from Medellin, Colombia. I
            like to experiment with all kinds of things, especially programming
            and I love building new apps and digital experiences. All code is
            essential, and attention to detail makes a project more than just a
            job, in my projects I focus on quality rather than quantity, and not
            only the code but also its entire life cycle.
          </p>
          <p className="max-w-lg text-center mt-10 text-black dark:text-white">
            I ♥ Music,{' '}
            <a
              className="text-orange"
              href="https://www.instagram.com/slydragonn/"
              target="_blank"
              rel="noreferrer"
            >
              Drawing
            </a>{' '}
            and Creating Content for{' '}
            <a
              className="text-orange"
              href="https://www.youtube.com/@slydragonn"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
          </p>
        </section>
        <div className="w-full border-b border-black dark:border-[#606060] mb-6 text-center">
          <h3 className="font-semibold text-black dark:text-white">
            Lastest Youtube Videos
          </h3>
        </div>
        <section className="flex flex-col md:flex-row justify-around items-center w-full h-[600px] md:h-auto mb-20 px-3">
          <Card
            image="/assets/work/youtube-min.png"
            title="Link in Bio page"
            link="https://www.youtube.com/@slydragonn"
          />
          <Card
            image="/short.webp"
            title="CSS Text Gradient"
            link="https://www.youtube.com/@slydragonn"
          />
        </section>
      </main>
    </div>
  )
}

export default Home
