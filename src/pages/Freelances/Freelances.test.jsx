import { rest, http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import {
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import { render } from '../../utils/test'

import FreeLances from './Freelances'
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  // url à intercepter
  http.get('http://localhost:8000/freelances', () => {
    // datas mockées (simulées) en json
    return HttpResponse.json({ freelancersList: freelancersMockedData })
  })
)

// Active la simulation de l'API
beforeAll(() => server.listen())
// Réinitialisation des handlers avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API quand les tests sont finis
afterAll(() => server.close())

test('test de rendu', async () => {
  render(<FreeLances />)

  await waitForElementToBeRemoved(() =>
    expect(screen.getAllByTestId('loader')).toBeTruthy()
  )
  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
  })
})
