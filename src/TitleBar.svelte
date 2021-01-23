<script>
  import Close from './icons/Close.svelte';
  import Maximise from './icons/Maximise.svelte';
  import Minimise from './icons/Minimise.svelte';
</script>

<header class="bg-title-blue text-white flex flex-row justify-between">
  <div class="flex">
    <Maximise className="mx-1 self-center" />
    <h1 class="inline-block">Defragmenting Drive C</h1>
  </div>
  <div class="flex items-center text-black">
    <Minimise className="mr-1" />
    <Maximise className="mr-1" />
    <Close className="mr-1" />
  </div>
</header>
