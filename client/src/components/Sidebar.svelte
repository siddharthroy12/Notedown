<script>
  import SidebarHeader from './SidebarHeader.svelte'
  import SidebarList from './SidebarList.svelte'
  import SidebarAllNotes from './SidebarAllNotes.svelte'
  import SidebarNotebooks from './SidebarNotebooks.svelte'
</script>

<aside>
  <SidebarHeader />
  <SidebarList>
    <SidebarAllNotes />
    <SidebarNotebooks />
  </SidebarList>
</aside>

<style>
  aside {
    width: 250px;
    height: 100vh;
    background: var(--sidebar-background);
    --padding: 12px;
    --list-item-height: 40px;
  }
</style>

