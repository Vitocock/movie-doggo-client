const API_KEY = 'c4862ec57819cb41b585c3c99130f45b'

export const getPopular = async ({ mediaType, timeWindow = 'week' }) => {
  const url = `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`
  const res = await fetch(url)
  const resData = await res.json()
  console.log(resData)
  
  return resData
}

export const getDetailsById = async ({ mediaType, id }) => {
  const url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}`
  const res = await fetch(url)
  const resData = await res.json()
  
  return resData
}

export const getCreditsById = async ({ mediaType, id }) => {
  const url = `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${API_KEY}`
  const res = await fetch(url)
  const resData = await res.json()
  
  return resData
}

const getContentByMediaType = async ({ mediaType, query, page }) => {
  const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${API_KEY}&query=${query}&page=${page}`
  const res = await fetch(url)
  const resData = await res.json()

  return resData.results.map(data => { return { ...data, mediaType } })
}

const sortByPopularity = ({ content1, content2 }) => {
  return content2.popularity - content1.popularity
}

export const getContentByQuery = async ({ query, page }) => { 
  let results = []
  const movie = await getContentByMediaType({ mediaType : 'movie', query, page })
  const tv = await getContentByMediaType({ mediaType : 'tv', query, page })
  const person = await getContentByMediaType({ mediaType : 'person', query, page }) 

  results = [...movie, ...tv, ...person]
  results.sort((content1, content2) => sortByPopularity({ content1, content2 }))

  return results
} 


