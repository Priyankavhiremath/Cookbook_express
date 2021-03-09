import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="btn-info  text-center text-lg-start">
        
                    <section class="mb-4 primarycolor">
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="fab fa-twitter"></i></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i ></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

                <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Priyankavhiremath/Cookbook_express" role="button"><i class="fab fa-github"></i></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-discord"></i></a>
            </section>
        
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
