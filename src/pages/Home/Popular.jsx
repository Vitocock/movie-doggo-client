import { useEffect, useState } from 'react'

import Slider from '../../components/Slider'
import Card from '../../components/Card'
import { getPopular } from '../../services/api'

const createCard = (data, mediaType) => {
  const content = {
    id : data.id,
    name : data.title || data.name,
    img: data.poster_path || data.profile_path,
    mediaType
  }
  return (
    <Card key={ content.id }>
      {content}
    </Card>
  )
}

const Popular = () => {
  const [ trending, setTrending ] = useState({ movie : [], tv : [], person : [] })

  useEffect(() => {
    const getTrending = async () => {
      try {
        const movie = await getPopular({ mediaType : 'movie' })
        const tv = await getPopular({ mediaType : 'tv' })
        const person =  await getPopular({ mediaType : 'person' })

        setTrending({movie : movie.results, tv : tv.results, person : person.results})
      } catch (e) {
        console.log(e)
      }
    }
    getTrending()
  }, [])

  return (
    <section className='popular'>
      <div className='section-popular'>
        <h2>Popular Movies</h2>
        <Slider>
          {trending.movie.map(item => createCard(item, 'movie'))}
        </Slider>
      </div>
      <div className='section-popular'>
        <h2>Popular Tv Series</h2>
        <Slider>
          {trending.tv.map(item => createCard(item, 'tv'))}
        </Slider>
      </div>
      <div className='section-popular'>
        <h2>Popular People</h2>
        <Slider>
          {trending.person.map(item => item.profile_path ? createCard(item, 'person') : '' )}
        </Slider>
      </div>
    </section>
  )
}

export default Popular