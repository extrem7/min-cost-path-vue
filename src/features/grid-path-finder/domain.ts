export type Grid = number[][]

export function isGrid(value: unknown): value is Grid {
  if (!Array.isArray(value))
    return false

  return value.every(
    row => Array.isArray(row)
    && row.length === value[0].length
    && row.every(cell => typeof cell === 'number'),
  )
}

export function calculateGridMinPathSum(grid: Grid): number {
  const height = grid.length
  const width = grid[0].length

  /*
    Same size as grid.
    Filled with 0 and will be used to store the sum of the path for each cell.
  */
  const a = Array.from({ length: height }, () => Array(width).fill(0))

  // Fill the initial cell
  a[0][0] = grid[0][0]

  // Fill the first column
  for (let y = 1; y < height; y++) {
    a[y][0] = grid[y][0] + a[y - 1][0]
  }

  // Fill the first row
  for (let x = 1; x < width; x++) {
    a[0][x] = grid[0][x] + a[0][x - 1]
  }

  // Calculate the sum of the path for rest of cells
  for (let y = 1; y < height; y++) {
    for (let x = 1; x < width; x++) {
      a[y][x] = grid[y][x] + Math.min(a[y - 1][x], a[y][x - 1])
    }
  }

  return a[height - 1][width - 1]
}
