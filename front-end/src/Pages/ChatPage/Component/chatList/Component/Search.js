import React from 'react'
import { BsSearch } from 'react-icons/bs';

const Search = () => {
 
  return (
    <div className="input-with-icon">
    <i><BsSearch/></i>
    <input type="text" className='searchinput' placeholder="Enter text here" />
  </div>
  )
}

export default Search