export function getGridPosition(index: number, colsCount: number) {
  const row = Math.ceil(index / colsCount);

  const col = index % colsCount || colsCount;

  return { row, col };
}
