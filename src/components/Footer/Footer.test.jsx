import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Footer from './Footer'
import { ThemeProvider } from '../../utils/Context/Context'

test('Change theme', async () => {
  render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  )
  const nightModeButton = screen.getByRole('button')
  expect(nightModeButton.textContent).toBe('Chongai deux maude : ☀️')
  fireEvent.click(nightModeButton)
  expect(nightModeButton.textContent).toBe('Chongai deux maude : 🌙')
})
