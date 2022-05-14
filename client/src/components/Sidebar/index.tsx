import List from './List';
import ListItem from './ListItem';
import Icon from 'supercons';
import './index.css';

function Sidebar() {
  return (
    <aside className="Sidebar">
      <div className="Sidebar__header">
        <p>Notedown</p>
        <Icon glyph="settings" size={32}/>
      </div>
      <List>
        <ListItem>
          <Icon glyph="post-fill" size={20} />
          All notes
         </ListItem>
        <ListItem disabled>
          <Icon glyph="docs" size={20} />
            Notebooks
         </ListItem>
      </List>
    </aside>
  )
}


export default Sidebar
