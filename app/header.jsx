
import Link from 'next/link'
import React from 'react'
import Searchbar from '../components/client/searchbar.jsx'

const header = () => {
    
  return (
    <nav className='header'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <Searchbar />
    </nav>
  )
}

export default header