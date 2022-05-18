import { writable } from 'svelte/store'

type Tag = {
  name: string,
  color: 'default' | 'grey' | 'red' | 'orange' | 'yellow' |
  'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' |
  'pink' | 'brown' | 'grey' | 'black'
}

type Status = 'Active' | 'On Hold' | 'Complete' | 'Dropped'


type Note = {
  name: string,
  status: Status,
  tags: Tag[],
  markdown: string,
  path: string
}

type Notebook = {
  name: string,
  parent: string,
  notebooks: Notebook[]
}

type Store = {
  notes: Note[],
  notebooks: []
}

function createStore() {
  const { subscribe, set, update } =  writable<Store>({
    notes: [],
    notebooks: []
  });

  function createNotebook(root: string, name: string) {
  }

  return {
    subscribe
  }
}

const store = createStore();

export default store;
