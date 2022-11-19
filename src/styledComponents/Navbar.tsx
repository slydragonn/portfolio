import styled, { keyframes } from 'styled-components'
import { COLORS } from 'utils'

interface NavbarItemProps {
  isActive: boolean
  theme: 'dark' | 'light'
}

export const NavbarItem = styled.li<NavbarItemProps>`
  color: ${props => {
    
    if(props.isActive && props.theme === 'light') {
      return COLORS.white100
    } else if (props.isActive && props.theme === 'dark') {
      return COLORS.black100
    }else if (props.theme === 'light') {
      return COLORS.black100
    }
    return COLORS.white100
  }};
  background-color: ${props => {
    if (props.isActive && props.theme === 'light') {
      return COLORS.black100
    } else if (props.isActive && props.theme === 'dark') {
      return COLORS.white100
    }
    return 'transparent'
  }};
  padding: 5px;
  border-radius: 3px;
  font-weight: ${props => (props.isActive ? 400 : 200)};
`
interface ThemeButtonProps {
  theme: 'dark' | 'light'
}

export const ThemeButton = styled.button<ThemeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: ${props => props.theme === 'dark' ? 'orange': 'purple'};
  border-radius: 3px;
`
