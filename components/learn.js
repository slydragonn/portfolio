import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { PostgreSQLSvg, PythonSvg } from './list-svg'

const Learn = () => {
  const skills = ['Python', 'PostgreSQL']

  const handleSkills = skill => {
    const skillComponent = {
      'Python': <PythonSvg />,
      'PostgreSQL': <PostgreSQLSvg />
    }

    return skillComponent[skill]
  }

  return (
    <Box
      mt="100px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
    >
      <div
        style={{
          borderTop: '1px solid #000',
          borderTopColor: useColorModeValue(
            'rgb(56, 56, 56)',
            'rgb(241, 238, 233)'
          )
        }}
      >
        <Heading as="h3" size="md">
          Keep Learning
        </Heading>
        <Stack direction="row" mt="20px">
          {skills.map(skill => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '10px'
              }}
              key={`learn${skill}`}
            >
              {handleSkills(skill)}
              <p>{skill}</p>
            </div>
          ))}
        </Stack>
      </div>
    </Box>
  )
}

export default Learn
