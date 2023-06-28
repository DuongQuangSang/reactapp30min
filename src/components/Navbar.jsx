import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/17260662/pexels-photo-17260662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
        <span>John</span>
        <button onClick={()=>signOut(auth)}>Log out</button>
      </div>
    </div>
  )
}

export default Navbar