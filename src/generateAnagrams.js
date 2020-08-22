const getAllAnagrams = word => {
  if (word.length == 1) {
    return [word]
  }

  const results = []
  for (let i = 0; i < word.length; i++) {
    const char1 = word[i]
    const charsLeft = word.substring(0, i) + word.substring(i + 1)
    const innerPermutations = getAllAnagrams(charsLeft)
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(char1 + innerPermutations[j])
    }
  }
  return results
}

export default getAllAnagrams
