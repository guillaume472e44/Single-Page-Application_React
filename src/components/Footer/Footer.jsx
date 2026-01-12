import styled from 'styled-components'
import color from '../../utils/style/color'
import { useTheme } from '../../utils/hooks'
import EmailInput from '../EmailInput/EmailInput'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-block: 48px;
  margin-top: 80px;
  background-color: whitesmoke;
  border-radius: 99px;
  ${({ theme }) =>
    theme === 'light'
      ? `background-color: whitesmoke`
      : `background-color: #4F4C6B`};
  button {
    color: ${({ theme }) => (theme === 'light' ? color.secondary : 'white')};
  }
`
const NightModeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export default function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
    <FooterContainer theme={theme}>
      <EmailInput theme={theme} />
      <NightModeBtn onClick={() => toggleTheme()}>
        Chongai deux maude : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeBtn>
    </FooterContainer>
  )
}
