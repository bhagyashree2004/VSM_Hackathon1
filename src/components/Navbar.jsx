import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-blue-950 py-3 text-white'>
            <div className="flex gap-8 mx-9 bg-blue-950">
                <NavLink className={(e)=>{return e.isActive ? "cursor-pointer hover:font-bold transition-all duration-75" : ""}} to='/'><li className=' bg-blue-950'>Home</li></NavLink>
                <NavLink className={(e)=>{return e.isActive ? 'cursor-pointer hover:font-bold transition-all duration-75':''}} to='/compare'><li className='bg-blue-950'>Compare Prices</li></NavLink>
            </div>   
        </nav>
    </div>
  )
}

export default Navbar