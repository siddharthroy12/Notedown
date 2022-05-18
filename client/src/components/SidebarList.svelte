<ul>
  <slot></slot>
</ul>

<style>
  ul {
    list-style: none;
  }

  :global(ul > li >  ul > li) {
    padding-left: calc(var(--padding) * 4) !important;
  }
</style>
