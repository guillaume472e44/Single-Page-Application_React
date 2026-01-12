import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../Context/Context'

const GlobalStyledStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, sans-serif;
    padding: 24px 40px;
    margin: 0;    
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? '#2F2E41' : 'white'};   
  };
`

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <GlobalStyledStyle isDarkMode={theme === 'dark'} />
}
