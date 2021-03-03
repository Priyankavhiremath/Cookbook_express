import React from 'react';
import {Link} from 'react-router-dom';
import "../../App.css";

const MealCard = ({mealpic, title, describe, mealtype, mealid}) => {
    return (
        <div className="card mt-3">
            <img className="card_image card-img-top"
                 src={mealpic}
                 alt="..."
                 height='250'
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {describe}
                </p>
                <Link to={`/meals/${mealtype}/${mealid}`} className="btn btn-primary">
                    SELECT
                </Link>
            </div>
        </div>
    )
}

export default MealCard
