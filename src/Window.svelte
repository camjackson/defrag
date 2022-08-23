<script lang="ts">
  export let contentWidth: number;
  export let contentHeight: number;
</script>

<div
  style="width: {contentWidth}px; height: {contentHeight}px;"
  class="box-content border border-gray-700 bg-window-grey shadow-2xl">
  <slot />
</div>

<!-- 194 / 255 = 76% -->
