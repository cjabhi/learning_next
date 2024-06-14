"use client";
import React , {useState} from 'react'


const searchbar = () => {
    const [searchvalue , setSearchvalue] = useState('');
  return (
    <input 
    type='text' 
    placeholder='search' 
    value={searchvalue} 
    onChange={(e)=>(setSearchvalue(e.target.value))} />
  )
}

export default searchbar