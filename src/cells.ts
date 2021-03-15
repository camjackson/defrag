import { randomRange, sum } from './util';

export enum CellState {
  Normal,
  Immovable,
}

export type CellData = {
  cells: CellState[];
  cellWidth: number;
  cellHeight: number;
};

export const defaultCellData: CellData = {
  cells: [],
  cellWidth: 0,
  cellHeight: 0,
};

export const getCellData = (
  currentCellData: CellData = defaultCellData,
  windowWidth: number,
  windowHeight: number,
): CellData => {
  if (currentCellData.cells.length > 0) {
    return currentCellData;
  }

  if (!windowWidth || !windowHeight) {
    return currentCellData;
  }

  const idealCellWidth = 10;
  const idealCellHeight = 14;

  const numberOfColumns = Math.floor(windowWidth / idealCellWidth);
  const numberOfRows = Math.floor(windowHeight / idealCellHeight);
  const numberOfCells = numberOfColumns * numberOfRows;

  const cellWidth = windowWidth / numberOfColumns;
  const cellHeight = windowHeight / numberOfRows;

  return { cells: buildCells(numberOfCells), cellWidth, cellHeight };
};

const buildCells = (count: number): CellState[] => {
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
