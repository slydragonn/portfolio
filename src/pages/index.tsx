import {
  Button,
  LinkItem,
  SocialNetworks,
  Tag,
  Title,
  Image,
  Card,
  SubTitle
} from 'components'
import { AnimatedShow } from 'components/animations'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <AnimatedShow>
      <Head>
        <title>Alejandro&apos;s Portfolio | Home</title>
        <meta name="description" content="Alejandro's Portfolio" />
      </Head>
      <main className="relative flex flex-col items-center">
        <section
          style={{ height: 'calc(100vh - 50px)' }}
          className="flex flex-col items-center justify-center px-3 gap-5"
        >
          <Title>Alejandro Londoño</Title>
          <p className="uppercase font-thin text-base sm:text-xl md:text-2xl text-black dark:text-white text-center">
            Software Developer
          </p>
          <SocialNetworks />
          <LinkItem href="/work">
            <Button>MY PORTFOLIO</Button>
          </LinkItem>
        </section>
        <section className="max-w-lg">
          <SubTitle>About me</SubTitle>
          <section className="flex flex-col items-center mb-20 px-4 sm:px-0">
            <Image
              src="/ale.jpg"
              alt="Alejandro Londoño Picture"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '150px',
                marginBottom: '20px',
                objectFit: 'cover'
              }}
            />
            <Tag width="100%">Hi! I&apos;m a Software Developer 💻🐉</Tag>
            <p className="font-light dark:font-normal text-justify mt-10 text-black dark:text-white">
              I&apos;m a Software Developer from Medellín, Colombia. I
              specialize in Front-End Apps with TypeScript and React. I like to
              enjoy life and coding...
            </p>
            <p className="max-w-lg text-center mt-10 text-black dark:text-white">
              I ♥ Music, Drawing and Creating Content for{' '}
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
          <SubTitle>📹 Lastest Youtube Videos</SubTitle>
          <section className="flex flex-col md:flex-row justify-between items-center w-full h-[450px] md:h-auto mb-20">
            <Card
              image="/assets/youtube/neovim.jpg"
              title="My Neovim Setup"
              link="https://youtu.be/vkCnPdaRBE0"
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

export default Home
