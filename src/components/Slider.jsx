import './Slider.css'

const Slider = ({ children }) => {
  return (
    <section className='slider-container'>
      <div className='slider'>
        {children.map(item => item)}
      </div>
    </section>
  )
}

export default Slider