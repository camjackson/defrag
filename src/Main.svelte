<script lang="ts">
  import { CellState, getCellData } from './cells';
  import type { CellData } from './cells';

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
