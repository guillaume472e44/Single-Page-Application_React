import styled from 'styled-components'
import homeIllustration from '../../assets/home-illustration.svg'
import { StyledLink } from '../../utils/style/Atoms'
import color from '../../utils/style/color'
import { useTheme } from '../../utils/hooks'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 128px;
  height: fit-content;
  max-width: 1500px;
  margin: auto;

  h1 {
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 32px;
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  }
`

function App() {
  const { theme } = useTheme()
  return (
    <HomeContainer theme={theme}>
      <div>
        <h1>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </h1>
        <StyledLink $isFullLink to="/survey/1">
          Faire le test
        </StyledLink>
      </div>
      <img src={homeIllustration} alt="" />
    </HomeContainer>
  )
}

export default App
