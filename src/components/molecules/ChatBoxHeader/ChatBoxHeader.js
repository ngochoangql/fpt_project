import React from 'react'
import './ChatBoxHeader.scss'
function ChatBoxHeader() {
  return (
    <div className='chat_box_header__container'>
    <img className='chat_box_header__logo' src='images/Logo.png'/>
    <h1 className='chat_box_header__content'>Phòng Đào Tạo FPT Polytechnic Cơ Sở TPHCM</h1>
    </div>
  )
}

export default ChatBoxHeader