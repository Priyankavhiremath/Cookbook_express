import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="btn-info  text-center text-lg-start">
            <div className="text-center p-3">
                © 2021 Copyright:
                <Link class="text-dark" to="https://google.com/">
                    What’s Cooking
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
