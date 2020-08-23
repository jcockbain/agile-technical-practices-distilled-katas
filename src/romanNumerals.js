const conversion = {}

const romanNumerals = n => {
  const res = []
  if (n === 5) {
    return 'V'
  }
  if (n === 4) {
    return 'IV'
  }
  for (let i = 0; i < n; i++) {
    res.push('I')
  }
  return res.join('')
}

export default romanNumerals
