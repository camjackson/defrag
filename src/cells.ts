export enum CellState {
  Normal,
  Immovable,
}

export const buildCells = (count: number): CellState[] => {
  const cells = [];

  for (let i = 0; i < count; i++) {
    cells.push(CellState.Normal);
  }

  addImmovables(cells);

  return cells;
};

const addImmovables = (cells: CellState[]) => {
  const minRunLength = 1;
  const maxRunLength = 10;

  const numberOfImmovables = randomRange(
    Math.floor(cells.length / 50),
    Math.floor(cells.length / 30),
  );

  const runLengths: number[] = [];

  do {
    runLengths.push(randomRange(minRunLength, maxRunLength));
  } while (sum(runLengths) < numberOfImmovables);

  runLengths.forEach((runLength) => {
    const runStart = findSpaceForRun(cells, runLength);

    for (let i = runStart; i < runStart + runLength; i++) {
      cells[i] = CellState.Immovable;
    }
  });
};

const findSpaceForRun = (cells: CellState[], runLength: number): number => {
  let index: number = null;

  do {
    const candidate = randomRange(0, cells.length);

    const candidateCells = cells.slice(candidate, candidate + runLength);

    if (candidateCells.every((cell) => cell === CellState.Normal)) {
      index = candidate;
    }
  } while (index === null);

  return index;
};

const sum = (numbers: number[]) =>
  numbers.reduce((total, num) => total + num, 0);

const randomRange = (min: number, max: number): number => {
  const range = max - min;

  return Math.floor(Math.random() * range) + min;
};
