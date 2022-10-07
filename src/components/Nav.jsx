import SearchBar from './SearchBar'
import logo from '../assets/logo64x64.png'
import Login from '../pages/Auth/Login/Login'
import Register from '../pages/Auth/Register/Register'

import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <a href="/">
      <div className='logo'>
        <img src={logo} alt="MovieDoggo" />
      </div>
      <div>
        <h1>MovieDoggo</h1>
      </div>
      </a>
      <SearchBar />

      <div>
        <Login />
        
        <Register />
      </div>
    </nav>
  )
}

export default Nav