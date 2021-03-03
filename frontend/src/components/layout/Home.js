import React from 'react';
import Meals from '../Meals';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100">
                        <h1 className="display-3 text-white">What’s Cooking</h1>
                        <h5 className="text-white">Our blog features recipe reviews, cooking tips, kitchen skill
                            tutorials, and more! We'll help you upgrade from a kitchen noob to a Mediocre Chef.</h5>
                    </div>
                </div>
            </div>
            <Meals/>
            <Footer/>
        </div>
    )
}

export default Home
