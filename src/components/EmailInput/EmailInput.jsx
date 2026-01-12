import { Component, useState } from 'react'
import { useTheme } from '../../utils/hooks'
import styled from 'styled-components'
import color from '../../utils/style/color'

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
`

const StyledInput = styled.input`
  appearance: none;
  border: none;
  color: ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? color.dark : 'white')};
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 2px 4px;
  &:focus {
    outline: none;
    background-color: #ffffff;
  }
`

// class EmailInput extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       inputValue: '',
//     }
//   }

//   updateInputValue(value) {
//     this.setState({ inputValue: value })
//   }

//   render() {
//     const { theme } = this.props

//     return (
//       <InputWrapper theme={theme}>
//         <StyledLabel theme={theme}>Adresse Email</StyledLabel>
//         <StyledInput
//           theme={theme}
//           onChange={(e) => this.updateInputValue(e.target.value)}
//         />
//       </InputWrapper>
//     )
//   }
// }

export default function EmailInput() {
  const [inputValue, setInputValue] = useState('')
  const { theme } = useTheme()

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Adresse Email</StyledLabel>
      <StyledInput theme={theme} onChange={handleInput} value={inputValue} />
    </InputWrapper>
  )
}
