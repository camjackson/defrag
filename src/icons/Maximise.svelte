<script lang="ts">
  import GreyBoxIcon from './GreyBoxIcon.svelte';

  export let className: string;

  const path = `
  M4 4 H12 V12 H4 V4
  M4 5 H12
`;
</script>

<GreyBoxIcon className="{className}" path="{path}" />
