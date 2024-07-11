import { describe, expect, it } from 'vitest'
import { type Grid, calculateGridMinPathSum } from './domain'

const testCases: [Grid, number][] = [
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 21],
  [[[1, 1, 1], [1, 1, 1], [1, 1, 1]], 5],
  [[[5, 4, 2], [1, 9, 3], [8, 7, 6]], 20],
]

describe('calculateGridMinPathSum', () => {
  it(`should return correct results`, () => {
    testCases.forEach(([grid, expected]) => {
      expect(calculateGridMinPathSum(grid)).toEqual(expected)
    })
  })
})
