import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { SurveyContext } from '../../utils/Context/Context.jsx'
import { useFetch, useTheme } from '../../utils/hooks/index.jsx'
import styled from 'styled-components'
import color from '../../utils/style/color'
import Loader from '../../utils/style/Atoms.jsx'

const SurveyContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};

  h1 {
    text-decoration: underline;
    text-decoration-color: ${color.secondary};
  }

  h2 {
    margin-block: 40px;
  }
`

const BtnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`
const StyledButton = styled.button`
  width: 192px;
  height: 40px;
  border: none;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark};
  border-radius: 99px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 8px 4px ${color.primary} inset` : 'none'};
`

const LinkContainer = styled.div`
  padding-block: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  a {
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
    font-weight: 600;
    width: 192px;
  }
`
const ErrorSpan = styled.span`
  color: crimson;
  display: block;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`

export default function Survey() {
  const { theme } = useTheme()
  const { questionNumber } = useParams()
  const { answers, saveAnswers } = useContext(SurveyContext)
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }
  const { data, isLoading, error } = useFetch('http://localhost:8000/survey')
  if (error) return <ErrorSpan>Il y a un problème</ErrorSpan>
  const { surveyData } = data

  return (
    <SurveyContainer theme={theme}>
      <h1>Question n° {questionNumber} 📇</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <h2>{surveyData && surveyData[questionNumber]}</h2>
      )}

      <BtnsContainer>
        <StyledButton
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
          theme={theme}
        >
          Oui
        </StyledButton>
        <StyledButton
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
          theme={theme}
        >
          Non
        </StyledButton>
      </BtnsContainer>

      <LinkContainer theme={theme}>
        <Link to={`/survey/${questionNumber > 1 ? questionNumber - 1 : 1}`}>
          Question précédante
        </Link>
        <Link
          to={`${
            Number(questionNumber) + 1 > 6
              ? '/results'
              : `/survey/${Number(questionNumber) + 1}`
          }`}
        >
          Question suivante
        </Link>
      </LinkContainer>
    </SurveyContainer>
  )
}
