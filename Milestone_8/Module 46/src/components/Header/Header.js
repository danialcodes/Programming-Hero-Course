import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className=''>
            <nav className='menu flex-me'>
                <a href="/home">Home</a>
                <a href="/Countires">Countries</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact US</a>
            </nav>
        </div>
    );
};

export default Header;