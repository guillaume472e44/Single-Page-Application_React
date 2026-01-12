import { useFetch, useTheme } from '../../utils/hooks/index.jsx'
import Card from '../../components/Card/Card'
import styled from 'styled-components'
import color from '../../utils/style/color'
import Loader from '../../utils/style/Atoms.jsx'
import { Link } from 'react-router-dom'

const PageContainer = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;

  h2 {
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  }

  p {
    color: ${color.secondary};
    margin-block: 40px;
    font-weight: 600;
  }
`

const CardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(2, 360px);
  grid-template-columns: repeat(2, 360px);
  place-items: center;

  & a {
    text-decoration: none;
  }
`
const ErrorSpan = styled.span`
  color: crimson;
  display: block;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`

export default function Freelances() {
  const { theme } = useTheme()
  const { isLoading, data, error } = useFetch(
    'http://localhost:8000/freelances'
  )
  if (error) return <ErrorSpan>Il y a un problème</ErrorSpan>
  const { freelancersList } = data

  return (
    <PageContainer theme={theme}>
      <h2>Trouvez votre prestataire </h2>
      <p>Chez Shiny, nous réunissons les meilleurs profils pour vous.</p>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : (
        <CardContainer>
          {freelancersList &&
            freelancersList.map((profile) => (
              <Link
                key={`freelance-${profile.id}`}
                to={`/profile/${profile.id}`}
              >
                <Card
                  label={profile.job}
                  picture={profile.picture}
                  title={profile.name}
                  theme={theme}
                />
              </Link>
            ))}
        </CardContainer>
      )}
    </PageContainer>
  )
}
