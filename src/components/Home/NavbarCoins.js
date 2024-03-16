import React from 'react'
import { FaCoins } from 'react-icons/fa'
import './NavbarCoins.css'
import { Link } from 'react-router-dom'

const NavbarCoins = () => {
    return (
        <Link to='/' className='navbar-link'>
            <div className='navbarcenter'>
                {/* <FaCoins className='iconscolor' /> */}
                <h1 className='CoinHead'>Coin <span className='search'>Search</span></h1>
            </div>
        </Link>
    )
}

export default NavbarCoins  