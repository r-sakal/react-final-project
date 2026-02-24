import React from 'react';
import Logo from '../assets/logo.png';


const Nav = () => {
    return (
       <nav>
            <div className="nav__container">
                <a href='/'>
                <img src={Logo} alt="logo" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__links">
                        Home</a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__links">
                        Results</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
