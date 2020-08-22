import getAllAnagrams from '../src/generateAnagrams'

describe('getAllAnagrams()', () => {
  it('generates all the correct anagrams for ab', () => {
    const word = 'ab'
    const result = getAllAnagrams(word)
    const expected = ['ab', 'ba']
    expect(result.sort()).toEqual(expected.sort())
  })
  it('generates all the correct anagrams for abc', () => {
    const word = 'abc'
    const result = getAllAnagrams(word)
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    expect(result.sort()).toEqual(expected.sort())
  })
})
