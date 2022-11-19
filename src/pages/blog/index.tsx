import { NextPage } from 'next'
import { Title } from 'components'
import Head from 'next/head'

const Blog: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Alejandro&apos;s Portfolio | Blog</title>
      </Head>
      <div className="mt-10">
        <Title>Blog</Title>
      </div>
      <p className="text-xl text-center my-20">
        this page is under development
      </p>
    </main>
  )
}

export default Blog
