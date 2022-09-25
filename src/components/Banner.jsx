import './Banner.css'

const Banner = ({ poster, backdrop, contentName }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  const posterPath = `${imagePath}${poster}`
  const backdropPath = `${imagePath}${backdrop}`

  return (
    <div className="banner-container">
      <img className="banner-poster" src={posterPath} alt={contentName}/>
      <img className="banner-backdrop" src={backdropPath} alt={contentName}/>
    </div>
  )
}

export default Banner