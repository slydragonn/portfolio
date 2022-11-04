import Footer from 'components/Footer'
import LinkItem from 'components/LinkItem'
import { NextPage } from 'next'
import Head from 'next/head'
import { HomeCard } from 'styledComponents'
import { COLORS } from 'utils'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alejandro&apos;s Portfolio</title>
        <meta name="description" content="Alejandro's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative flex flex-col items-center'>
        <section style={{minHeight: 'calc(100vh - 48px)'}} className='flex flex-col items-center justify-between'>
          <h1 className='flex flex-col text-4xl sm:text-6xl md:text-7xl text-white font-black text-center select-none transition-all'>
            <p className='text-xl sm:text-4xl italic font-thin mt-4 sm:mt-6 md:mt-16 font-serif'>Alejandro Londoño</p>
            <span className='uppercase'>Front-End Developer</span>
          </h1>
          <section className='flex flex-col lg:flex-row rounded-[10px] overflow-hidden my-10 lg:my-0'>
            <LinkItem href='/about'>
              <HomeCard color={COLORS.red}>
                <p>Hi!, I&apos;m Front-End Developer</p>
                <h2 className='self-end font-black text-4xl opacity-40'>about</h2>
              </HomeCard>
            </LinkItem>
            <LinkItem href='/work'>
              <HomeCard color={COLORS.yellow}>
                <p>Did you see my projects?</p>
                <h2 className='self-end font-black text-4xl opacity-40'>work</h2>
              </HomeCard>
            </LinkItem>
            <LinkItem href='/blog'>
              <HomeCard color={COLORS.green_100}>
                <p>Latest programming articles</p>
                <h2 className='self-end font-black text-4xl opacity-40'>blog</h2>
              </HomeCard>
            </LinkItem>
            <LinkItem href='/about'>
              <HomeCard color={COLORS.green_200}>
                <p>How to know more about me</p>
                <h2 className='self-end font-black text-4xl opacity-40'>contact</h2>
              </HomeCard>
            </LinkItem>
          </section>
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default Home
