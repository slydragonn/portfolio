import styled from "styled-components";

interface NavbarItemProps {
  isActive: boolean
}

export const NavbarItem = styled.li<NavbarItemProps>`
  color: ${props => props.isActive ? '#fff' : '#606060' }
`