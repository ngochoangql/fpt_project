import React from 'react'
import './Button.scss'
const Button = ({onClick}) => {
  return (
    <div className='button'>
    <div className='button__background'></div>
    <button onClick={onClick} className='button_login'>Login</button>
    </div>
  )
}

export default Button