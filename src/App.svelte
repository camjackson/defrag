<script lang="ts">
  import Window from './Window.svelte';
  import TitleBar from './TitleBar.svelte';
  import Main from './Main.svelte';
  import Footer from './Footer.svelte';
</script>

<div class="p-2 w-full h-full">
  <Window>
    <TitleBar />
    <Main />
    <Footer />
  </Window>
</div>
