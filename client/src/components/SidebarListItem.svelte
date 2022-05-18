<li>
  <slot></slot>
</li>

<style>
  li {
    height: var(--list-item-height);
    color: var(--sidebar-text);
    display: flex;
    align-items: center;
    padding: 0 var(--padding);
    cursor: pointer;
  }

  li:hover {
    background: var(--sidebar-item-select);
  }
</style>
