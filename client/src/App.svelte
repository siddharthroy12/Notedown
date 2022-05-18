<script>
  import Sidebar from './components/Sidebar.svelte';
  import Notesbar from './components/Notesbar.svelte';
</script>

<main class="theme-1">
  <Sidebar></Sidebar>
  <Notesbar></Notesbar>
</main>

<style>
  .theme-1 {
    --sidebar-background: #1e1e1e;
    --sidebar-text: #efefef;
    --sidebar-text-dim: #a6a6a6;
    --sidebar-icon: #686868;
    --sidebar-item-select: #3a3a3a;
    --notesbar-background: #ededed;
  }

  main {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
</style>
