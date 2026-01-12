import styled from 'styled-components'
import color from '../../utils/style/color'
import error404 from '../../assets/404.svg'
import { useTheme } from '../../utils/hooks'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding-block: 32px;
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark};
  border-radius: 48px;
  h1,h2 {
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  }
  img{
    max-width: 640px;
  }
`

export default function Error() {
  const { theme } = useTheme()
  return (
    <Container theme={theme}>
      <h1>Oups...</h1>
      <img src={error404} alt="" />
      <h2>Peut-être dans une autre réalité ?</h2>
    </Container>
  )
}
