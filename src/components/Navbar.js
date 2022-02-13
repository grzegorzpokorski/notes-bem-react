import React from "react";
import Logo from './Logo';
import NavbarItem from './NavbarItem';
import './../styles/modules/_navbar.scss';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Logo content='Notes' />
            <ul className="navbar__list">
                <NavbarItem description="nowa" />
                <NavbarItem description="zarządzaj" />
            </ul>
        </nav>
    );
}

export default Navbar;