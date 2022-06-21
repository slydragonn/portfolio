import { Box, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import Dragon from '../dragon'
import Footer from '../footer'
import Header from '../header'

const Main = ({ children }) => {
  return (
    <Box as="main" pb="8" pos="relative">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Alejandro's Portfolio" />
        <meta name="author" content="Alejandro Londoño" />
        <link rel="icon" type="img/png" href="/img/fireball.png" />
        <title>Alejandro&apos;s Portfolio</title>
      </Head>
      <Header />
      <Dragon />
      {children}
      <Divider w="70%" m="0 auto" />
      <Footer />
    </Box>
  )
}

export default Main
