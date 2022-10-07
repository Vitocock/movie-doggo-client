import { useState, useEffect } from 'react'
import Modal from '../../../components/Modal'

import '../Auth.css'

const Register = () => {
  const [ hide, setHide ] = useState(true) // true => ocultar
  const [ data, setData ] = useState({
    email : '',
    password : '',
    password2 : '',
    username : ''
  })

  useEffect(() => {
    setData({ email : '', password : '', password2 : '', username : '' })
  }, [hide])

  const handleChange = (event) => {
    const { target } = event
    const { value, name } = target
    setData({...data, [name] : value})
  }

  

  return (
    <> 
    <button className='auth-button' onClick={() => setHide(false)}>Register</button>
    <Modal hide={hide}>
    <div className='modal-content login-form'>
        <div className='close-modal'>
          <button onClick={() => setHide(true)}>✖</button>
        </div>
        <h3>Register</h3>
        <form>
          <input value={data.email} onChange={handleChange}
          type="text" name="email" id="email" placeholder='Your email' 
          />
          <input value={data.password} onChange={handleChange}
          type="password" name="password" id="password" placeholder='Password'
          />
          <input value={data.password2} onChange={handleChange}
          type="password" name="password2" id="password2" placeholder='Confirm your password'
          />
          <input value={data.username} onChange={handleChange}
          type="text" name="username" id="username" placeholder='Username'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </Modal>
    </>
  )
}

export default Register