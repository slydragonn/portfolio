import { NextPage } from 'next'
import { Title, ArticleCard } from 'components'
import Head from 'next/head'
import { AnimatedShow } from 'components/animations'
import { Client } from '@notionhq/client'

const { NOTION_TOKEN, NOTION_DB } = process.env

const notion = new Client({
  auth: NOTION_TOKEN
})

export async function getStaticProps() {
  const response = await notion.databases.query({
    database_id: NOTION_DB as string,
    filter: {
      and: [
        {
          property: 'Public',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'Status',
          status: {
            equals: 'Done'
          }
        }
      ]
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending'
      }
    ]
  })

  return {
    props: {
      posts: response
    }
  }
}

const Blog: NextPage = ({ posts }: any) => {
  return (
    <AnimatedShow>
      <main>
        <Head>
          <title>Alejandro&apos;s Portfolio | Blog</title>
        </Head>
        <div className="mt-10">
          <Title>Blog</Title>
        </div>
        <section className="flex flex-col gap-16 border-l border-l-[#b8b8b8] p-4 my-20 mx-4 md:mx-0">
          {posts.results.length ? (
            posts.results.map((post: any) => (
              <ArticleCard
                key={post.id}
                creationDate={post.properties.Date.date.start}
                title={post.properties.Name.title[0].text.content}
                content={post.properties.Content.rich_text[0].text.content}
                categories={post.properties.Categories.multi_select}
                url={post.properties.Url.url}
              />
            ))
          ) : (
            <h3 className="text-black dark:text-white text-xl">
              🍳 Items are cooking!
            </h3>
          )}
        </section>
      </main>
    </AnimatedShow>
  )
}

export default Blog
