import React from 'react'
import ChatList from './Component/chatList/ChatListMerge'
import ChatBox from './Component/ChatBox/ChatBoxMerge'
import './index.css'
const ChatPageMerge = () => {
  const getvalue = (data)=>{
      console.log(data?.Name)
  }
  return (
    <div className='MessageUi'>
        <div className='left-side-message'><ChatList getvalue = {getvalue}/></div>
        <div className='right-side-message'><ChatBox/></div>
    </div>
  )
}

export default ChatPageMerge