import { useState } from 'react'

import './Modal.css'

const Modal = ({ children, hide }) => {

  return (
    <div className={`modal-container ${hide ? 'hide' : ''}`}>
      {children}
    </div>
  )
}

export default Modal