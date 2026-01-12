import color from './color'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const rotate = keyframes`
  to {
        transform: rotate(360deg);
    }
`
export const Loader = styled.div`
  padding: 8px;
  border: 8px solid ${color.primary};
  border-bottom-color: transparent;
  border-radius: 24px;
  animation: ${rotate} 0.8s infinite linear;
  width: 0;
  height: 0;
  margin: 40px auto;
`
export default Loader

export const StyledLink = styled(Link)`
  display: inline-block;
  padding-inline: 32px;
  padding-block: 8px;
  color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${color.primary};`}

  img {
    ${(props) =>
      props.$logo &&
      `
    padding: 0;
    border-radius: 50px;
  `}
  }
`
