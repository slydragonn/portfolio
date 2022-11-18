import styled from "styled-components"
import { COLORS } from 'utils'

interface NavbarItemProps {
  isActive: boolean
}

export const NavbarItem = styled.li<NavbarItemProps>`
  color: ${props => props.isActive ? COLORS.white100 : COLORS.black100 };
  background-color: ${props => props.isActive ? COLORS.black100 : 'transparent' };
  padding: 5px;
  border-radius: 3px;
  font-weight: ${props => props.isActive ? 400 : 100};
`