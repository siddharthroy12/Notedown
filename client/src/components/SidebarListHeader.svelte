<li>
  <slot></slot>
</li>

<style>
  li {
    height: var(--list-item-height);
    color: var(--sidebar-text-dim);
    display: flex;
    align-items: center;
    padding: 0 var(--padding);
    cursor: pointer;
  }

  :global(.header-icon) {
    margin-right: 10px;
  }
</style>
