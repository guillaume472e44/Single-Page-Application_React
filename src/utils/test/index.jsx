import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider, SurveyProvider } from '../Context/Context'
import { MemoryRouter } from 'react-router-dom'

export function render(ui) {
  function Wrapper({ children }) {
    return (
      <MemoryRouter>
        <ThemeProvider>
          <SurveyProvider> {children} </SurveyProvider>
        </ThemeProvider>
      </MemoryRouter>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper })
}
