import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import PageContainer from '../../components/PageContainer'
import Banner from '../../components/Banner'
import Slider from '../../components/Slider'
import Tag from '../../components/Tag'
import { createCard } from '../../components/Card'
import { getDetailsById, getCreditsById } from '../../services/api'
import './Tv.css'

const resultHook = () => {
  const { id } = useParams()
  const { pathname } = useLocation()
  const mediaType = pathname.split('/')[1]
  const [ results, setResult ] = useState({ })
  const [ credits, setCredits ] = useState({ })

  useEffect(() => {
    const getDetails = async () => {
      const resResults = await getDetailsById({ mediaType, id })
      setResult(resResults)
      const resCredits = await getCreditsById({ mediaType, id })
      setCredits(resCredits)
    }
    getDetails()
  }, [id])

  return  {results, credits}         
}

const Tv = () => {
  const { results, credits} = resultHook()
  const { cast } = credits
  const { poster_path, backdrop_path, title, name, 
    tagline, vote_average, overview, genres } = results

  return (
    <>
    <h1 className='content-name'>{title || name}</h1>
    <h2 className='content-tagline'>{tagline}</h2>
    <Banner 
      poster={poster_path}
      backdrop={backdrop_path}
      contentName={title}
    />
    <div className='content-info'>
      <section className='overview'>
        <div>
          <h3>Overview</h3>
          {overview}
        </div>
        <div>
          <h3>Users Reviews: </h3>
          <ul></ul>
        </div>
      </section>
      <section className='vote-average'>
        Vote Average
        <span>{parseInt(vote_average) } / 10</span>
      </section>
      <ul className='genres'>
        {genres ? genres.map(({id, name}) => <Tag id={id} key={id}> • {name}</Tag>) : ''}
      </ul>
      <div className='casting'>
        {cast ?           
        <Slider>
          { cast.splice(0,10).map(person => createCard(person, 'person')) }
        </Slider> : ''}
      </div>
    </div>
    </>
    )
}

export default Tv