import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
const Header = () => {
    return (
        <header className="header">
            <NavLink to='/' exact>Home</NavLink>
            <div className="guestZone">
                <NavLink to='/login' exact>Login</NavLink>
                <NavLink to='/register' exact>Register</NavLink>
            </div>
        </header>
    )
}

export default Header
