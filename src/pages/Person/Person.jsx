import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import Slider from '../../components/Slider'
import { createCard } from '../../components/Card'
import { getDetailsById, getCombinedCredits } from '../../services/api'
import './Person.css'

const resultHook = () => {
  const { id } = useParams()
  const { pathname } = useLocation()
  const mediaType = pathname.split('/')[1]
  const [ results, setResult ] = useState({ })
  const [ credits, setCredits ] = useState([])

  // Escribir funcion que busque los creditos de un actor en peliculas y programas
  // https://developers.themoviedb.org/3/people/get-person-movie-credits

  useEffect(() => {
    const getDetails = async () => {
      const resResults = await getDetailsById({ mediaType, id })
      setResult(resResults)
      const resCredits = await getCombinedCredits({ mediaType, id })
      setCredits(resCredits)
    }
    getDetails()
  }, [id])

  return  {results, credits}         
}

const Person = () => {
  const { results, credits} = resultHook()
  const { profile_path, name, biography } = results

  return (
    <>
    <h1 className='content-name'>{name}</h1>
    <div className='person-info'>
      <div className='profile-pict'>
        <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt="" />
      </div>
      <section className='biography'>
        <h3>Biography</h3>
        <div>
          {biography}
        </div>
      </section>
      <div className='know-for'>
        { credits ?        
        <Slider>
          { credits.splice(0,15).map(content => createCard(content, content.media_type)) }
        </Slider> : ''
        }
      </div>
    </div>
    </>
  )
}

export default Person