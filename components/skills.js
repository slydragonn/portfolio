import { Box, Heading, Text } from '@chakra-ui/react'
import Glass from './layouts/glass'
import {
  CssSvg,
  FigmaSvg,
  GitSvg,
  HtmlSvg,
  JavaScriptSvg,
  NextSvg,
  NodeSvg,
  ReactSvg,
  SassSvg,
  TypeScriptSvg
} from './svg/list-svg'

const skills = [
  'JavaScript',
  'HTML',
  'CSS',
  'Sass',
  'React',
  'Nextjs',
  'Git',
  'Figma',
  'Nodejs',
  'TypeScript'
]

const getSkillSvg = (skill) => {
  const skillsDictionary = {
    'JavaScript': <JavaScriptSvg />,
    'HTML': <HtmlSvg />,
    'CSS': <CssSvg />,
    'Sass': <SassSvg />,
    'React': <ReactSvg />,
    'Nextjs': <NextSvg />,
    'Git': <GitSvg />,
    'Figma': <FigmaSvg />,
    'Nodejs': <NodeSvg />,
    'TypeScript': <TypeScriptSvg />
  }

  return skillsDictionary[skill]
}

const Skills = () => {
  return (
    <Box position="relative">
      <Glass
        mt="100px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Heading as="h3" size="md">
            Skills
          </Heading>
        </Box>
        <Box
          padding="20px"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          {skills.map((skill, i) => (
            <Box
              key={i}
              minW="50px"
              m="10px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {getSkillSvg(skill)}
              <Text>{skill}</Text>
            </Box>
          ))}
        </Box>
      </Glass>
    </Box>
  )
}

export default Skills
