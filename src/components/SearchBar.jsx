/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './ImageList.css'

function SearchBar({handleSubmit}) {

  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(term);
    
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }
  return (
    <div className='form_container'>
    <form onSubmit={onSubmit} >

      <label >Enter Search Term</label>
      <input type="text" placeholder='search' value={term} onChange={handleChange}  />
      </form>
      </div>
  )
}

export default SearchBar