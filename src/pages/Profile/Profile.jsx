import { Component } from 'react'
import { ThemeContext } from '../../utils/Context/Context'
import styled from 'styled-components'
import color from '../../utils/style/color'
import Loader from '../../utils/style/Atoms'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { useTheme } from '../../utils/hooks'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 96px 0;
  margin: 0 96px;
  border-radius: 48px;
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark};
`
const Picture = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 80px;
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  color: ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`
const JobTitle = styled.h2`
  font-size: 20px;
  padding-top: 8px;
  font-weight: 500;
`
const Location = styled.span`
  margin-inline: 8px;
  font-size: 16px;
  color: ${color.secondary};
`
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`
const SkillWrapper = styled.div`
  display: flex;
  padding: 8px 0;
`
const Skill = styled.span`
  font-size: 12px;
  border-radius: 80px;
  padding: 4px 8px;
  margin-right: 4px;
  border: 1px solid ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
`
const Availability = styled.span`
  position: relative;
  padding-left: 16px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
  }
`
const Price = styled.span`
  padding-top: 8px;
  font-weight: 500;
  font-size: 20px;
`

const ErrorSpan = styled.span`
  color: crimson;
  display: block;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`

// class Profile extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       profileData: {},
//     }
//   }

//   componentDidMount() {
//     const { id } = this.props

//     fetch(`http://localhost:8000/freelance?id=${id}`)
//       .then((response) => response.json())
//       .then((jsonresponse) => {
//         this.setState({ profileData: jsonresponse?.freelanceData })
//       })
//   }

//   render() {
//     const { profileData } = this.state
//     const { picture, name, location, tjm, job, skills, available, id } =
//       profileData
//     return (
//       <ThemeContext.Consumer>
//         {({ theme }) => (
//           <ProfileWrapper theme={theme}>
//             <Picture src={picture} alt={name} height={160} width={160} />
//             <ProfileDetails theme={theme}>
//               <TitleWrapper>
//                 <Title> {name} </Title>
//                 <Location> {location} </Location>
//               </TitleWrapper>
//               <JobTitle> {job} </JobTitle>
//               <SkillWrapper>
//                 {skills &&
//                   skills.map((skill) => (
//                     <Skill key={`skill-${skill}-${id}`} theme={theme}>
//                       {skill}
//                     </Skill>
//                   ))}
//               </SkillWrapper>
//               <Availability available={available}>
//                 {available ? 'Disponible maintenant' : 'Indisponible'}
//               </Availability>
//               <Price> {tjm}€ / jour </Price>
//             </ProfileDetails>
//           </ProfileWrapper>
//         )}
//       </ThemeContext.Consumer>
//     )
//   }
// }

// export default Profile

export default function Profile() {
  const { id } = useParams()
  const { theme } = useTheme()

  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/freelance?id=${id}`
  )
  if (error) return <ErrorSpan>Il y a un problème</ErrorSpan>

  const freelanceData = { ...data?.freelanceData }


  return (
    <ProfileWrapper theme={theme}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Picture
            src={freelanceData.picture}
            alt={freelanceData.name}
            height={160}
            width={160}
          />
          <ProfileDetails theme={theme}>
            <TitleWrapper>
              <Title> {freelanceData.name} </Title>
              <Location> {freelanceData.location} </Location>
            </TitleWrapper>
            <JobTitle> {freelanceData.job} </JobTitle>
            <SkillWrapper>
              {freelanceData.skills &&
                freelanceData.skills.map((skill) => (
                  <Skill key={`skill-${skill}-${id}`} theme={theme}>
                    {skill}
                  </Skill>
                ))}
            </SkillWrapper>
            <Availability available={freelanceData.available}>
              {freelanceData.available
                ? 'Disponible maintenant'
                : 'Indisponible'}
            </Availability>
            <Price> {freelanceData.tjm}€ / jour </Price>
          </ProfileDetails>
        </>
      )}
    </ProfileWrapper>
  )
}
