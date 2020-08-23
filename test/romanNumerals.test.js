import romanNumerals from '../src/romanNumerals'

describe('romanNumerals', () => {
  it('gives the correct roman numerals for 1', () => {
    const numerals = romanNumerals(1)
    expect(numerals).toBe('I')
  })
  it('gives the correct roman numerals for 2', () => {
    const numerals = romanNumerals(2)
    expect(numerals).toBe('II')
  })
  it('gives the correct roman numerals for 5', () => {
    const numerals = romanNumerals(5)
    expect(numerals).toBe('V')
  })
  it('gives the correct roman numerals for 4', () => {
    const numerals = romanNumerals(4)
    expect(numerals).toBe('IV')
  })
  // it('gives the correct roman numerals for 6', () => {
  //   const numerals = romanNumerals(6)
  //   expect(numerals).toBe('VI')
  // })
})
