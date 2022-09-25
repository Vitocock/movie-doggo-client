import { Link } from "react-router-dom";

import './Card.css'

const Card = ({ children }) => {
  const { mediaType, id, img, name } = children 
  const urlImg = `https://image.tmdb.org/t/p/w440_and_h660_face/${img}`
  
  return (
    <Link to={`/${mediaType}/${id}`} className='card'>
      <img src={urlImg} alt={name}/>
      <h5>{name}</h5>
    </Link>
  )
}

export const createCard = (data, mediaType) => {
  const content = {
    id : data.id,
    name : data.title || data.name || data.original_name,
    img: data.poster_path || data.profile_path,
    mediaType
  }
  return (
    <Card key={ content.id }>
      {content}
    </Card>
  )
}

export default Card