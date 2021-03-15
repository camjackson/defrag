<script lang="ts">
  import { buildCells, CellState } from './cells';

  type CellData = {
    cells: CellState[];
    cellWidth: number;
    cellHeight: number;
  };
  const defaultCellData: CellData = {
    cells: [],
    cellWidth: 0,
    cellHeight: 0,
  };

  const getCellData = (
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

    const numberOfColumns = Math.floor(w / idealCellWidth);
    const numberOfRows = Math.floor(h / idealCellHeight);
    const numberOfCells = numberOfColumns * numberOfRows;

    const cellWidth = w / numberOfColumns;
    const cellHeight = h / numberOfRows;

    return { cells: buildCells(numberOfCells), cellWidth, cellHeight };
  };

  let w: number;
  let h: number;

  let cellData: CellData;
  $: cellData = getCellData(cellData, w, h);
  $: cellStyle = `
    margin: 0 1px;
    width: ${cellData.cellWidth - 2}px;
    height: ${cellData.cellHeight - 2}px;
  `;

  const cellColours: Record<CellState, string> = {
    [CellState.Normal]: 'bg-blue-200',
    [CellState.Immovable]: 'bg-red-400',
  };
</script>

<style>
</style>

<main
  bind:clientWidth="{w}"
  bind:clientHeight="{h}"
  class="bg-white flex-grow leading-none">
  {#each cellData.cells as cell}
    <span
      style="{cellStyle}"
      class="inline-block border border-black {cellColours[cell]} w-3 h-5"></span>
  {/each}
</main>
