import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <nav className='header'>
            <Link className='header' to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            {/* <Link to="/friend">Friends detail</Link> */}
            <Link to="posts">Post</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;