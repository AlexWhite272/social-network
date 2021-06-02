import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="account__information">
                <div className="account__avatar">
                    <img src={process.env.PUBLIC_URL + '/zkd.png'} alt='images'/>
                </div>
                <div className="account__nickname">
                    <h2>Gvwgcd JScovwc</h2>
                </div>
                <div className="account__id">
                    <h4>@scyfdvev</h4>
                </div>
            </div>
            <div className='nav__link'>
                <NavLink exact activeClassName='nav__link_active' to='/profile' >
                    
                    Profile
                    
                </NavLink>

            </div>
            <div className='nav__link'>
                <NavLink Ё to='/dialogs' activeClassName='nav__link_active'>
                    Dialogs
                </NavLink>
            </div>
            <div className='nav__link'>
                <NavLink exact to='/music' activeClassName="nav__link_active">
                    Music
                </NavLink>
            </div>
            <div className='nav__link'>
                <NavLink exact to='/news' activeClassName='nav__link_active'>
                    News
                </NavLink>
            </div>
            <div className='nav__link'>
                <NavLink exact to='/settings' activeClassName='nav__link_active'>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;