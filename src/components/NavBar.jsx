import React from 'react'
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <div className='flex flex-row justify-between'>
            
            <NavLink to="/">

                <div>

                    <img src={logo}></img>

                </div>
            </NavLink>

            <div className='flex items-center'>
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                <NavLink to="/cart">
                    <div>
                        <FaShoppingCart />
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar