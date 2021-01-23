<script lang="ts">
  import GreyBoxIcon from './GreyBoxIcon.svelte';

  export let className: string;

  const path = `
  M4 12 H12
`;
</script>

<GreyBoxIcon className="{className}" path="{path}" thick />
