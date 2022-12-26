import { NextPage } from 'next'
import { Title } from 'components'
import Head from 'next/head'
import { AnimatedShow } from 'components/animations'

const Blog: NextPage = () => {
  return (
    <AnimatedShow>
      <main>
        <Head>
          <title>Alejandro&apos;s Portfolio | Blog</title>
        </Head>
        <div className="mt-10">
          <Title>Blog</Title>
        </div>
        <p className="text-xl text-center my-20">
        👷 This page is under development.
        </p>
      </main>
    </AnimatedShow>
  )
}

export default Blog
