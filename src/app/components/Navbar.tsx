import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='head'>
        <h1 className='had'>My Website</h1>
        <div className='hed'>

            <Link href="/" legacyBehavior><a >Home</a></Link>
            <Link href="/Skills" legacyBehavior><a >Skills</a></Link>
            <Link href="/Contact" legacyBehavior><a >Contact</a></Link>
        </div>
        
    </div>
  )
}

export default Navbar