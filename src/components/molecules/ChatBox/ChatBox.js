import React, { useRef } from 'react'
import './ChatBox.scss'
import MessageContent from '../../atoms/MessageContent/MessageContent'
function ChatBox({messages,mainref,isChatting}) {
 
  return (
    <div className={isChatting ? `chat_box__container` :`chat_box__container__logo`}  ref={mainref}>
        {isChatting ?<div className='chat_content'>
        {messages.map((mess,index) => (<MessageContent key={index} content={mess.content} obj={mess.obj}/>))}
        </div> : <div className='chat_box__logo' >
        <img className='chat_box__logo_image' src='images/logo_chat.png' />
        <p className='chat_box__logo_title'>FPT CHAT</p>
        </div>}
    </div>
  )
}

export default ChatBox