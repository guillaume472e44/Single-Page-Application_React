import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, test } from 'vitest'
import { ThemeProvider } from '../../utils/Context/Context'

describe('Home page', () => {
  it('test de rendu', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 1,
        text: `Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents`,
      })
    ).toBeTruthy()
    // screen.debug() => permet d'afficher le rendu de la page dans le terminal
  })
})
