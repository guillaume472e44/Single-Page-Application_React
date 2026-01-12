import { useContext } from 'react'
import { SurveyContext } from '../../utils/Context/Context.jsx'
import styled from 'styled-components'
import { useFetch, useTheme } from '../../utils/hooks/index.jsx'
import { StyledLink, Loader } from '../../utils/style/Atoms.jsx'
import color from '../../utils/style/color.js'
import EmptyList from '../../components/EmptyList/EmptyList.jsx'

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 64px 96px;
  padding: 32px;
  border-radius: 48px;
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark};
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};

  h2 {
    font-size: 2rem;

    span {
      font-style: italic;
      font-weight: lighter;
    }
  }

  ${StyledLink} {
    margin-block: 24px;
  }

  ul {
    margin-left: 24px;
    li:not(:last-child) {
      margin-block: 16px;
    }
  }
`

const ErrorSpan = styled.span`
  color: crimson;
  display: block;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`

// eslint-disable-next-line react-refresh/only-export-components
export function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)
  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

// eslint-disable-next-line react-refresh/only-export-components
export function formatJobList(title, listlength, index) {
  if (index === listlength - 1) return title
  return `${title},`
}

export default function Results() {
  const { answers } = useContext(SurveyContext)

  const { theme } = useTheme()

  const fetchParams = formatFetchParams(answers)
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )
  if (error) return <ErrorSpan>Il y a un problème</ErrorSpan>

  const resultsData = data?.resultsData

  if (resultsData?.length < 1) return <EmptyList theme={theme} />

  return isLoading ? (
    <Loader data-testid="loader" />
  ) : (
    <ResultContainer theme={theme}>
      <h2>
        les compétences dont avez besoins :
        {resultsData &&
          resultsData.map((result, index) => (
            <span
              data-testid="job-title"
              key={`result-title-${index}-${result.title}`}
            >
              {' '}
              {formatJobList(result.title, resultsData.length, index)}
            </span>
          ))}
      </h2>

      <StyledLink $isFullLink to={'/freelances'}>
        Découvrez nos profils
      </StyledLink>
      <ul>
        {resultsData.map((result, index) => (
          <li
            data-testid="job-description"
            key={`result-detail-${index}-${result.title}`}
          >
            {result.description}
          </li>
        ))}
      </ul>
    </ResultContainer>
  )
}
