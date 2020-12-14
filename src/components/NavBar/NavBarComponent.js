import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <NavLink exact to="/users">Users</NavLink>
            <NavLink exact to="/orders">Order</NavLink>
            <NavLink exact to="/comments">Leave comment</NavLink>
            <NavLink exact to="/profile">profile</NavLink>
        </div>
    )
}

export default NavBar;