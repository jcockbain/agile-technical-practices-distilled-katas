import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz tests', function () {
  it('returns "1" for 1', () => {
    expect(fizzBuzz(1)).toBe('1')
  })
  it('returns "2" for 2', () => {
    expect(fizzBuzz(2)).toBe('2')
  })
  it('returns "Fizz for 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })
  it('returns "Buzz for 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })
  it('returns "FizzBuzz for 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
})
