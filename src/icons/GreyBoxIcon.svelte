<script lang="ts">
  export let className: string;
  export let path = '';
  export let thick = false;

  const bgPath = `
  M0 0 H16 V16 H0 V0
`;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  width="16"
  height="16"
  class="inline fill-none stroke-current {className}">
  <path
    d="{bgPath}"
    class="{`fill-window-grey stroke-none text-transparent`}"></path>
  <path
    class="stroke-current fill-none {thick ? 'stroke-2' : 'stroke-1'}"
    d="{path}"></path>
</svg>
