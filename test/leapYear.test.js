import isLeapYear from '../src/leapYear'

describe('leapYear tests', function () {
  it('returns 1996 is a leap year', () => {
    expect(isLeapYear(1996)).toBe(true)
  })
  it('returns 1997 is not a leap year', () => {
    expect(isLeapYear(1997)).toBe(false)
  })
  it('returns 1900 is not a leap year', () => {
    expect(isLeapYear(1900)).toBe(false)
  })
  it('returns 2000 is a leap year', () => {
    expect(isLeapYear(2000)).toBe(true)
  })
})
