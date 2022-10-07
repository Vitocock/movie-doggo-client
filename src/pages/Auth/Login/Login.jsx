import { useState, useEffect } from 'react'

import Modal from '../../../components/Modal'
import { login } from '../../../auth/auth'

import '../Auth.css'

const Login = () => {
  const [ hide, setHide ] = useState(true) // true => ocultar
  const [ data, setData ] = useState({
    email : '',
    password : ''
  })

  useEffect(() => {
    setData({ email : '', password : ''})
  }, [hide])

  const handleChange = (event) => {
    const { target } = event
    const { value, name } = target
    setData({...data, [name] : value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const jwt = await login(data)
  }

  return (
    <> 
    <button className='auth-button'onClick={() => setHide(false)}>Login</button>
    <Modal hide={hide}>
      <div className='modal-content login-form'>
        <div className='close-modal'>
          <button onClick={() => setHide(true)}>✖</button>
        </div>
        <h3>Log in</h3>
        <form onSubmit={handleSubmit}>
          <input value={data.email} onChange={handleChange}
          type="text" name='email' placeholder='Your email'
          />  
          <input value={data.password} onChange={handleChange}
          type="password" name='password' placeholder='Password' 
          />  
          <button type='submit'>Login</button>
        </form>
        <a href="">Forgot your password?</a>
      </div>
    </Modal>
    </>
  )
}

export default Login