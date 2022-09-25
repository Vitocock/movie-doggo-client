import { useState } from "react"
import { useNavigate } from "react-router-dom"
import searchIcon from '../assets/search24x24.png'

const SearchBar = () => {
  const [ query, setQuery ] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${query}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} placeholder="Search" onChange={e => setQuery(e.target.value)}/>
        <button type="submit"><img src={searchIcon} alt="search"/></button>
      </form>
    </div>
  )
}

export default SearchBar