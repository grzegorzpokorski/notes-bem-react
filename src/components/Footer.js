import React from "react";

const Footer = ({ content }) => {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} {content}
            </p>
        </footer>
    );
}

export default Footer;