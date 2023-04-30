import React from 'react'
import '../index.css'
const PeopleChatH = (props) => {
    return (
        <div className='p-c-h'>
            <div className='main-block'>
                <div className='p-img'>
                    <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpotdz7nsWfzvhFDA0L6preDAREj9bcADiGHmfhjk&s' />
                </div>
                <div className='gen-in'>
                    <div className='ch-na'>
                        {props.header}
                    </div>
                    {props.LastMessage}
                    <div className='ch-la-me'>
                    </div>
                </div>
                <div className='ch-la-me-ti'>
                    {props.Time}
                </div>
            </div>
        </div>
    )
}

export default PeopleChatH