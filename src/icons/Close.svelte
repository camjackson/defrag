<script lang="ts">
  import GreyBoxIcon from './GreyBoxIcon.svelte';

  export let className: string;

  const path = `
  M4 4 L12 12
  M12 4 L4 12
`;
</script>

<GreyBoxIcon className="{className}" path="{path}" thick />
