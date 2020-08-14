import React from 'react';
import {NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="topnav" id="myTopnav">
                 
                 <NavLink to= "/home">
                    <span ></span> Student Leader Board
                   </NavLink>
                   <NavLink  to= "/form">
                    <span className="fa fa-asterisk i"></span> About
                   </NavLink>
         </div>
    )
}

export default Header

