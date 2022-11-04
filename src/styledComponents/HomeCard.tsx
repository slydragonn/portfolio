import styled from "styled-components";

interface HomeCardProps {
  color: string
}

const HomeCard = styled.article<HomeCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  background-color: ${props => props.color};
  padding: 10px;
  color: #383838;
`

export default HomeCard