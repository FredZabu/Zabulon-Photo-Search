/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

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
    <form onSubmit={onSubmit} >
      
      <input type="text" value={term} onChange={handleChange}  />
    </form>
  )
}

export default SearchBar