import { Avatar, Box, Heading, Text } from '@chakra-ui/react'
import Glass from './layouts/glass'

const Profile = () => {
  return (
    <Glass
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      id="about"
    >
      <Text mb="15px">Hi, I&apos;m a Front End Developer</Text>
      <Box
        w="100%"
        h='110px'
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="center"
        mt={{ base: '15px', sm: '0' }}
      >
        <Avatar
          name="Alejandro Londoño"
          src="/img/perfilAlogo.jpeg"
          size="lg"
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ base: 'center', sm: 'flex-start' }}
          ml={{ base: '0', sm: '15px' }}
        >
          <Heading as="h3" size="lg">
            Alejandro Londoño
          </Heading>
          <Text>I specialize in React Apps</Text>
        </Box>
      </Box>
    </Glass>
  )
}

export default Profile
