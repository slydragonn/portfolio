import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const About = ({ ...componetProps }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      {...componetProps}
    >
      <Box
        borderTop="1px solid"
        borderTopColor={useColorModeValue(
          'rgb(56, 56, 56)',
          'rgb(241, 238, 233)'
        )}
      >
        <Heading as="h3" size="md">
          About
        </Heading>
      </Box>
      <Text>
        I&apos;m a frontend developer, I&apos;m passionate about video games,
        sports, and learning as much as I can about my work. I work with
        everything that has to do with javascript, especially the frontend,
        emphasizing the react library and I love to experiment with the programming.
      </Text>
      <Box
        borderTop="1px solid"
        borderTopColor={useColorModeValue(
          'rgb(56, 56, 56)',
          'rgb(241, 238, 233)'
        )}
        mt="20px"
      >
        <Heading as="h4" size="sm">
          My hobbies
        </Heading>
      </Box>
      <Text>videogames, fútbol, draw and play guittar</Text>
    </Box>
  )
}

export default About
