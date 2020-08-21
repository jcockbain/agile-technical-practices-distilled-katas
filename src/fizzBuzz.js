const fizzBuzz = x => {
  if (x % 3 == 0 && x % 5 === 0) {
    return 'FizzBuzz'
  } else if (x % 3 === 0) {
    return 'Fizz'
  } else if (x % 5 === 0) {
    return 'Buzz'
  }
  return `${x}`
}

export default fizzBuzz
