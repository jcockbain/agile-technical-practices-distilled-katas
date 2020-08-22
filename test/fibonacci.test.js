import fibonacci from '../src/fibonacci'

describe('fibonacci tests', function () {
  it('returns 1 for fibonacci(1)', () => {
    expect(fibonacci(1)).toBe(1)
  })
  it('returns 1 for fibonacci(2)', () => {
    expect(fibonacci(2)).toBe(1)
  })
  it('returns 2 for fibonacci(3)', () => {
    expect(fibonacci(3)).toBe(2)
  })
  it('returns 3 for fibonacci(4)', () => {
    expect(fibonacci(4)).toBe(3)
  })
  it('returns 5 for fibonacci(5)', () => {
    expect(fibonacci(5)).toBe(5)
  })
  it('returns 21 for fibonacci(8)', () => {
    expect(fibonacci(8)).toBe(21)
  })
})
