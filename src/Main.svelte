<script lang="ts">
  import { CellState, getCellData } from './cells';
  import type { CellData } from './cells';

  export let height: number;
  export let width: number;

  let cellData: CellData;
  $: cellData = getCellData(cellData, width, height);
  $: cellStyle = `
    width: ${cellData.cellWidth - 2}px;
    height: ${cellData.cellHeight - 2}px;
  `;

  const cellColours: Record<CellState, string> = {
    [CellState.Normal]: 'bg-blue-200',
    [CellState.Immovable]: 'bg-red-400',
  };
</script>

<style>
  main {
    grid-template-columns: repeat(71, 8px);
    column-gap: 1px;
    row-gap: 1px;
  }
</style>

<main style="height: {height}px;" class="bg-white overflow-y-scroll grid">
  {#each cellData.cells as cell}
    <span
      style="{cellStyle}"
      class="inline-block border border-black {cellColours[cell]} w-3 h-5"></span>
  {/each}
</main>
