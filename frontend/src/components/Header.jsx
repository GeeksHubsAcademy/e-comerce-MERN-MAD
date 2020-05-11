import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/users';
const Header = ({ user }) => {
    
    return (
        <header className="header">
            <NavLink to='/' exact>Home</NavLink>
            {user ?
                <div className="userZone">
                    <NavLink to='/profile' exact>{user.email}</NavLink>
                    <div onClick={logout}>Logout</div>
                </div>
                :
                <div className="guestZone" >
                    <NavLink to='/login' exact>Login</NavLink>
                    <NavLink to='/register' exact>Register</NavLink>
                </div>
            }
        </header>
    )
}
const mapStateToProps = ({ user }) => ({ user: user.user })
export default connect(mapStateToProps)(Header);
