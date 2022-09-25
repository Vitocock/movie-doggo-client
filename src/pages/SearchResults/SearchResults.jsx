import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { createCard } from "../../components/Card"
import { getContentByQuery } from "../../services/api"
import './SearchResults.css'

const SearchResults = () => {
  const [ page, setPage ] = useState(1)
  const [ results, setResults ] = useState([]) 
  const params = useParams()
  const { query } = params

  useEffect(() => {
    const getResults = async () => {
      const result = await getContentByQuery({ query, page })
      setResults(result)
    }
    getResults()
  }, [query])

  return (
    <ul className="search-results-container">
      { results.map(result => <li key={result.id} className='result'>{createCard(result, result.mediaType)}</li>) }
    </ul>
  )
}

export default SearchResults