import { Box, Container, Divider } from '@chakra-ui/react'
import Info from '../components/info'
import Layout from '../components/layouts/layout'

const Home = () => {
  return (
    <Layout>
      <Box
        as="section"
        m="40px 0 100px 0"
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Divider w="70%" />
        <Box as="section" mt="40px" w="80%">
          <Container maxW="550px">
              <Info />
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
