<script lang="ts">
  import Window from './Window.svelte';
  import TitleBar from './TitleBar.svelte';
  import Main from './Main.svelte';
  import Footer from './Footer.svelte';

  const contentWidth = 640;
  const contentHeight = 480;

  const titleBarHeight = 24;
  const footerHeight = 100;

  const mainHeight = contentHeight - titleBarHeight - footerHeight;
</script>

<div class="p-2 w-full h-full flex items-center justify-center">
  <Window contentWidth="{contentWidth}" contentHeight="{contentHeight}">
    <TitleBar height="{titleBarHeight}" />
    <Main width="{contentWidth}" height="{mainHeight}" />
    <Footer height="{footerHeight}" />
  </Window>
</div>
