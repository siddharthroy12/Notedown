<script>
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import IoDocumentText from "svelte-icons-pack/io/IoDocumentText";
  import IoDocumentsOutline from "svelte-icons-pack/io/IoDocumentsOutline";
  import SidebarListItem from './SidebarListItem.svelte'
</script>

<SidebarListItem>
  <Icon src={IoDocumentsOutline} color="var(--sidebar-text)" size="20" className="header-icon"/>
  All Notes
</SidebarListItem>

<style>
  :global(.header-icon) {
    margin-right: 10px;
  }
</style>


