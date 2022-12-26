import {useEffect, useState} from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState<null | 'dark' | 'light'>(null)

  useEffect(() => {
    if (localStorage.theme == 'dark') {
      setTheme(() => 'dark')
    } else {
      setTheme(() => 'light')
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    } else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}

export default useTheme