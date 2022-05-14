import './index.css';

type Props = {
  children: React.ReactNode
}

function List({ children }: Props) {
  return (
    <ul className="List">
      { children }
    </ul>
  )
}

export default List;
