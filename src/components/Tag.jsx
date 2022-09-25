import { Link } from "react-router-dom"

const Tag = ({id, children}) => {
  return (
    <li>
      <Link to={`/genres/${id}`}>
        {children}
      </Link>
    </li>
  )
}

export default Tag