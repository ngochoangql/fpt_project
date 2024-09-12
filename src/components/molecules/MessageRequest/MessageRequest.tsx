import React, { FC } from 'react'
import './MessageRequest.scss'
const MessageRequest  = ({onChange,submitRequest,cleanMessages}) =>{
  return (
    <div className='message_request__container'>
        <img onClick={cleanMessages} className='message_request__clean' src="images/clean_icon.png"/>
        <div className='message_request__content'>
            <input onChange={(e) => onChange(e.target.value)} className='message_request__input' type='text' />
            <img src='images/send_icon.png' onClick={submitRequest} /> 
        </div>
    </div>
  )
}

export default MessageRequest