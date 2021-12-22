import { Link } from 'react-router-dom'
import React from 'react'


const NavBar = () => {


    return (
        <div>
            <nav className='navBar'>
              <Link to="/">Home</Link>
              <Link to='/region'>Region </Link>
            </nav>
        </div>
    )
}

export default NavBar