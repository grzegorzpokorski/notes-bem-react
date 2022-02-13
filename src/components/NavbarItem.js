import React from "react";

const NavbarItem = ({ iconClass, description }) => {
    return (
        <li className="navbar__item">
            <span>
                {description}
            </span>
        </li>
    );
}

export default NavbarItem;