import About from './about'
import Learn from './learn'
import Profile from './profile'
import Skills from './skills'

const Info = () => {
  return(
    <>
      <Profile />
      <About mt="100px" />
      <Skills />
      <Learn />
    </>
  )
}

export default Info