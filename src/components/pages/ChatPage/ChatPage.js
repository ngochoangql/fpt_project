import React, { useEffect, useRef, useState } from 'react'
import './ChatPage.scss'
import ChatBox from '../../molecules/ChatBox/ChatBox'
import ChatBoxHeader from '../../molecules/ChatBoxHeader/ChatBoxHeader'
import MessageRequest from '../../molecules/MessageRequest/MessageRequest'
function ChatPage() {
    const [isChatting,setIsChatting] = useState(false)
    const [messages,setMessages] = useState([{content:"Helo AI !",obj:"user"},{content:"May can i help you?",obj:"ai"}])
    const [messageRequest,setMessageRequest] = useState("")
    const ref = useRef(null);
    console.log(messageRequest);
    const submitRequest = () => {
        setMessages((prev) => [...prev,{content:messageRequest,obj:"user"}])
        setIsChatting(true)
    }
    const cleanMessages = () => {
        setMessages([])
        setIsChatting(false)
    }
    const [heightDevice,setHeightDevice] = useState(window.outerHeight)
    useEffect(()=>{
      setHeightDevice(window.outerHeight)
    },[window.outerHeight])
  return (
    <div className='chat_page__container'>
    <ChatBoxHeader/>
    <ChatBox messages={messages} mainref={ref} isChatting={isChatting}/>
   
    <MessageRequest onChange={setMessageRequest} submitRequest={submitRequest} cleanMessages={cleanMessages} />
    </div>
  )
}

export default ChatPage