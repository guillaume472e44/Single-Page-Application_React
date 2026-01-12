import { describe, expect, it } from 'vitest'
import { formatJobList, formatFetchParams } from './Results'

describe('La fonction formatJobList', () => {
  it('ajoute une virgule à un item', () => {
    expect(formatJobList('item2', 3, 1)).toEqual('item2,')
  })
  it("n'ajoute PAS de virgule au dernier élément", () => {
    expect(formatJobList('item3', 3, 2)).toEqual('item3')
  })
})

// test('test de la fonction formatFetchParams', () => {
//   const answers = { 1: true, 2: false, 3: true, 4: true, 5: true, 6: true }
//   const response = 'a1=true&a2=false&a3=true&a4=true&a5=true&a6=true'
//   expect(formatFetchParams(answers)).toEqual(response)
// })

describe('La fonction formatFetchParams', () => {
  it('transforme un objet en string', () => {
    expect(formatFetchParams({ 1: true })).toEqual('a1=true')
  })
  it('concatene les params avec &', () => {
    expect(formatFetchParams({ 1: true, 2: false })).toEqual('a1=true&a2=false')
  })
})
