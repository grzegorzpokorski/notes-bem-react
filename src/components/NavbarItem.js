import React from "react";

const NavbarItem = ({ description, name }) => {
    return (
        <li>
            <button name={name} className="navbar__item">
                {description}
            </button>
        </li>
    );
}

export default NavbarItem;