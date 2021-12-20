import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {


    return (
        <div>
            <nav className='nav-bar'>
                <Link to="/">Home</Link>
                {/* <Link to="/categories"> Categories</Link> */}
               
            </nav>
        </div>
    )
}

export default NavBar