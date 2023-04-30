import React from 'react'
import { useState } from 'react'
import '../index.css'


const Header = () => {
    const [totalChat,Settotalchat] = useState(10);

  return (
    <div className='ChatListHeader'>
        Messages  ({totalChat})
    </div>
  )
}

export default Header