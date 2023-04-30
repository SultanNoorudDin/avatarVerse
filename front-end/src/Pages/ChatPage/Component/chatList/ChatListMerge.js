import React from 'react'
import Header from './Component/Header'
import Search from './Component/Search'
import PeopleChatH from './Component/PeopleChatH'

const ChatListMerge = (props) => {
  const onclick = (data) =>{
    props.getvalue(data )
  }
    const messageList = [
        {
          header: "John",
          lastMessage: "Hey, what's up?",
          time: "9:32 AM"
        },
        {
          header: "Sarah",
          lastMessage: "Can you send me that file?",
          time: "Yesterday"
        },
        {
          header: "Mike",
          lastMessage: "Sorry, I can't make it today.",
          time: "Wednesday"
        },
        {
          header: "Linda",
          lastMessage: "Thanks for the update!",
          time: "Tuesday"
        }
      ];
    return (
        <div className='chatlistmerge'>
            <div className='c-l-m-l'>
                <Header />
            </div>
            <Search />
            {messageList.map((item , index)=>{
               return <PeopleChatH header = {item.header} LastMessage = {item.lastMessage} Time = {item.time} key = {index} />
            })}
        </div>
    )
}

export default ChatListMerge