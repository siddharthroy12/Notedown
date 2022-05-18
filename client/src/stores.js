import { writable } from 'svelte/store'

function createStore() {
  const { subscribe, set, update } = writable({
    notebooks: {},
    notes: {},
    tags: {}
  })

  function createNotebook(parent:any) {

  }
  return {
    subscribe,
  }
}


export const store = createStore()
