import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import {
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { afterAll, afterEach, beforeAll, expect, test, describe } from 'vitest'

import { render } from '../../utils/test'

import Results from './Results'

const resultsMockedDatas = [
  { title: 'backdoorMan', description: 'no one want to knows' },
  { title: 'sissyYoh', description: 'if only...' },
]

const server = setupServer(
  http.get('http://localhost:8000/results', () => {
    return HttpResponse.json({ resultsData: resultsMockedDatas })
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close)

describe('le composant Result', () => {
  test('affiche les résultats après le chargement des données', async () => {
    render(<Results />)

    await waitForElementToBeRemoved(() =>
      expect(screen.getAllByTestId('loader')).toBeTruthy()
    )
    const jobTitleEl = screen.getAllByTestId('job-title')
    expect(jobTitleEl[0].textContent).toBe(' backdoorMan,')
    expect(jobTitleEl.length).toEqual(2)

    const jobDescription = screen.getAllByTestId('job-description')
    expect(jobDescription[1].textContent).toBe(
      resultsMockedDatas[1].description
    )
    expect(jobDescription.length).toEqual(jobTitleEl.length)
  })
})
