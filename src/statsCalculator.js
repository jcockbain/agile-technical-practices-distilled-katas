const statsCalculator = nums => {
  return [min(nums), max(nums), len(nums), sum(nums) / len(nums)]
}

const sum = nums => nums.reduce((a, b) => a + b, 0)

exports.getMax = nums => Math.max(...nums)

exports.getMin = nums => Math.min(...nums)

exports.getLen = nums => nums.length

exports.getAverage = nums => sum(nums) / nums.length

export default statsCalculator
