import React from "react";
import Logo from './Logo';
import NavbarItem from './NavbarItem';
import './../styles/modules/_navbar.scss';

const Navbar = ({ chandleNavbarOptions }) => {
    return (
        <nav className='navbar'>
            <Logo content='Notes' />
            <ul className="navbar__list" onClick={chandleNavbarOptions}>
                <NavbarItem description="nowa" name="new" />
                <NavbarItem description="zarządzaj" name="manage" />
            </ul>
        </nav>
    );
}

export default Navbar;