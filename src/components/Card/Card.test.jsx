import Card from './Card'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, test } from 'vitest'
import { ThemeProvider } from '../../utils/Context/Context'

describe('Freelances Cards', () => {
  it('vérif chargement des props', async () => {
    render(
      <ThemeProvider>
        <Card
          title="THX 1138"
          label="Deviant Worker"
          picture="./Nez_Couilles.jpg"
        />
      </ThemeProvider>
    )
    const cardPicure = screen.getByRole('img')
    expect(cardPicure.src).toBe('http://localhost:3000/Nez_Couilles.jpg')
    const cardName = screen.getByText(/THX/i)
    // const cardName = screen.getByText("THX 1138")
    expect(cardName.textContent).toBe('THX 1138')

    // screen.debug()
  })
  it('vérif mise en favori', async () => {
    render(
      <ThemeProvider>
        <Card
          title="THX 1138"
          label="Deviant Worker"
          picture="./Nez_Couilles.jpg"
        />
      </ThemeProvider>
    )
    const cardContainer = screen.getByRole('img').closest('div')
    const cardName = screen.getByText(/THX/i)
    fireEvent.click(cardContainer)
    expect(cardName.textContent).toBe('✨ THX 1138 ✨')
  })
})
