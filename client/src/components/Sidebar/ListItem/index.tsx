import './index.css'

type Props = {
  children: React.ReactNode,
  disabled: boolean
}

function ListItem({ children, disabled }: Props) {
  return (
    <li className={`ListItem ${disabled ? 'disabled' : 'enabled'}`}>
      { children }
    </li>
  )
}

ListItem.defaultProps = {
  disabled: false
}

export default ListItem
