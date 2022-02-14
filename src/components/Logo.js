import React from "react";
import './../styles/modules/_logo.scss';

const Logo = ({ content }) => {
    return (
        <h1 className="logo">
            {content}
        </h1>
    );
}

export default Logo;