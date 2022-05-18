<script>
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import IoSettingsOutline from "svelte-icons-pack/io/IoSettingsOutline"
  import IoMenuSharp from "svelte-icons-pack/io/IoMenuSharp";
  import AppLogo from './AppLogo.svelte'
</script>

<div class="header">
  <AppLogo />
  <div class="buttons">
    <Icon src={IoMenuSharp}/>
    <Icon src={IoSettingsOutline}/>
  </div>
</div>

<style>
  .header {
    padding: 0 var(--padding);
    color: var(--sidebar-text-dim);
    height: var(--list-item-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  :global(.header svg) {
    fill: var(--sidebar-icon);
    width: 25px;
    height: 25px;
  }

  :global(.header > svg:first-child) {
    width: 36px;
  }

  :global(.buttons svg) {
    margin-left: 10px;
  }
</style>
