import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'
import lightLogo from '../../assets/light-logo.png'
import { StyledLink } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks'

import MyComponant from '../Quizz/ParentEl'

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Header() {
  const { theme } = useTheme()
  return (
    <StyledNav>
      <div>
        <StyledLink to="/" $logo>
          <img src={theme === 'light' ? darkLogo : lightLogo} alt="Logo" />          
        </StyledLink>
        <MyComponant />
      </div>
      <div>
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledNav>
  )
}
