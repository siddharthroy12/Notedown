<script>
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import IoBook from "svelte-icons-pack/io/IoBook";
  import SidebarListHeader from './SidebarListHeader.svelte'
  import SidebarList from './SidebarList.svelte'
  import SidebarListItem from './SidebarListItem.svelte'
</script>

<li>
  <SidebarListHeader>
  <Icon src={IoBook} color="var(--sidebar-text-dim)" size="20" className="header-icon"/>
  Notebooks
  </SidebarListHeader>
  <SidebarList>
    <SidebarListItem>
      hello
    </SidebarListItem>
  </SidebarList>
</li>

<style>
</style>


