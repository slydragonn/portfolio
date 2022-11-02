import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alejandro&apos;s Portfolio</title>
        <meta name="description" content="Alejandro's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-6xl'>Hello World!</h1>
      </main>
    </div>
  )
}

export default Home
