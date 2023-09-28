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
    <form onSubmit={onSubmit} className='form_container' >
      
      <input type="text" value={term} onChange={handleChange}  />
    </form>
  )
}

export default SearchBar