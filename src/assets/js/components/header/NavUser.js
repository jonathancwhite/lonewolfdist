import React from 'react'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

export const NavUser = () => {
    return (
        <div className="header-navUser flex start">
            <a href="#" className='navUser--action'><AiOutlineUser className="dark" />Sign In/Register</a>
            <a href="#" className="navUser--action"><AiOutlineShoppingCart className='dark'/></a>
        </div>
    )
}
