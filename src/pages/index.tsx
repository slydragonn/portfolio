import { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from 'components'
import { Button } from 'styledComponents'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alejandro&apos;s Portfolio</title>
        <meta name="description" content="Alejandro's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <h1 className='text-6xl'>Hello World!</h1>
        <Button onClick={() => alert('hello')}>
          Click me!
        </Button>
      </main>
    </div>
  )
}

export default Home
