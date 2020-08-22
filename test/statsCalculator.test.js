import { getMax, getMin, getLen, getAverage } from '../src/statsCalculator'

describe('statsCalculator tests', function () {
  const nums = [1, 2, 3, 10, 12]
  const nums2 = [10, 2, 3, 11, 9, 4, 1, 0, 5, 6]
  describe('getMax()', function () {
    it('returns 12 for getMax(nums)', () => {
      const res = getMax(nums)
      expect(res).toBe(12)
    })
    it('returns 11 for getMax(nums)', () => {
      const res = getMax(nums2)
      expect(res).toBe(11)
    })
  })
  describe('getMin()', function () {
    it('returns 1 for getMax(nums1)', () => {
      const res = getMin(nums)
      expect(res).toBe(1)
    })
    it('returns 10 for getMax(nums2)', () => {
      const res = getMin(nums2)
      expect(res).toBe(0)
    })
  })
  describe('getLen()', function () {
    it('returns 5 for getLen(nums1)', () => {
      const res = getLen(nums)
      expect(res).toBe(5)
    })
    it('returns 10 for getLen(nums2)', () => {
      const res = getLen(nums2)
      expect(res).toBe(10)
    })
  })
  describe('getAverage()', function () {
    it('returns 5.6 for getAverage(nums1)', () => {
      const res = getAverage(nums)
      expect(res).toBe(5.6)
    })
    it('returns 5.1 for getAverage(nums2)', () => {
      const res = getAverage(nums2)
      expect(res).toBe(5.1)
    })
  })
})
