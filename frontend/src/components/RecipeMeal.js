import React, {Fragment, useEffect, useState} from "react";
import {Client} from "../utils/Client";
import {useParams} from "react-router-dom";
import marked from 'marked';
import Axios from 'axios'
import "../App.css";

const RecipeMeal = () => {
    const RecipeId = Number(useParams().mealId);
    const [receipe, setReceipe] = useState();

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/recipes/${RecipeId}`)
            .then((res) => {

                // let RecipeMeal = res.items.find((meal) => {
                //         return (
                //             meal.fields.id === RecipeId
                //         )
                //     }
                // )
                console.log(res.data[0]);
                setReceipe(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <Fragment>
            {
                receipe &&
                <div className="container mt-4 p-5 recipe shadow-sm border border-dark rounded recipebackground">
                    <h1 className="pb-2 pt-2 text-capitalize d-flex justify-content-center text-black"> {receipe.title}</h1>
                    <hr black/>
                    <div className="row m-3 d-flex justify-content-center">
                        <p>{receipe.description}</p>
                        <img className="shadow-sm p-3 bg-light border rounded w-75"
                             src={`http://localhost:5000/image/${receipe.image}`} alt={receipe.image}/>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal-md justify-content-center">
                            <li className="list-group-item">Prep Time: {receipe.prep_time}</li>
                            <li className="list-group-item">Cook Time: {receipe.cook_time}</li>
                            <li className="list-group-item">Total Time : {receipe.prep_time+receipe.cook_time}</li>
                        </ul>
                    </div>
                    <div className="row m-3 d-flex justify-content-center">
                        <div
                            className="ingredients col-lg-5 mr-1 mb-1 shadow-sm p-3 border-dark rounded background white">
                            <section dangerouslySetInnerHTML={{__html: marked(receipe.ingredients)}}/>
                        </div>
                        <div className="col-lg-6 mr-1 mb-1 shadow-sm p-3 border  rounded description background white">
                            <section dangerouslySetInnerHTML={{__html: marked(receipe.directions)}}/>
                        </div>
                    </div>
                </div>
            }
        </Fragment>

    );
};

export default RecipeMeal;
