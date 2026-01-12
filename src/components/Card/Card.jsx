import PropTypes from 'prop-types'
import styled from 'styled-components'
import color from '../../utils/style/color'
import defaultPicture from '../../assets/Nez_Couilles.jpg'
import { useTheme } from '../../utils/hooks'
import { useState } from 'react'
import { Component } from 'react'

const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? color.primary : 'white')};
  font-size: 24px;
  font-weight: 500;
`
const CardImage = styled.img`
  height: 192px;
  width: 192px;
  border-radius: 50%;
  margin-block: auto;
`
const CardName = styled.span`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  font-size: 1.6rem;
  font-weight: 600;
`

const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: system-ui, sans-serif;
  padding: 16px;
  background-color: ${({ theme }) =>
    theme === 'light' ? color.backgroundLight : color.backgroundDark};
  border-radius: 32px;
  width: 350px;
  height: 320px;
  transition: box-shadow 0.2s ease-out;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 8px #e2e3e9;
  }
`

// function Card({ label = '', title = '', picture = defaultPicture }) {
//   const [isFavorite, setIsFavorite] = useState(false)
//   const { theme } = useTheme()

//   return (
//     <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
//       <CardLabel theme={theme}>{label}</CardLabel>
//       <CardImage src={picture} alt="freelance" />
//       <CardName theme={theme}>
//         {isFavorite && '✨ '}
//         {title}
//         {isFavorite && ' ✨'}
//       </CardName>
//     </CardWrapper>
//   )
// }

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
    }
  }

  setIsFavorite() {
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  render() {
    const { theme, label, picture, title } = this.props

    return (
      <CardWrapper theme={theme} /* onClick={() => this.setIsFavorite()} */>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardName theme={theme}>
          {this.state.isFavorite && '✨ '}
          {title}
          {this.state.isFavorite && ' ✨'}
        </CardName>
      </CardWrapper>
    )
  }
}

// Card.propTypes = {
//   label: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
// }

export default Card
