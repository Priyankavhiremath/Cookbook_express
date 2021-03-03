import React, {Fragment, useEffect, useState} from "react";
import {Client} from "../utils/Client";
import {useParams} from "react-router-dom";
import marked from 'marked';
import "../App.css";

const RecipeMeal = () => {
    const RecipeId = Number(useParams().mealId);
    const [receipe, setReceipe] = useState();

    useEffect(() => {
        Client.getEntries()
            .then((res) => {

                let RecipeMeal = res.items.find((meal) => {
                        return (
                            meal.fields.id === RecipeId
                        )
                    }
                )
                console.log(RecipeMeal);
                setReceipe(RecipeMeal);
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
                    <h1 className="pb-2 pt-2 text-capitalize d-flex justify-content-center text-black"> {receipe.fields.receipe}</h1>
                    <hr black/>
                    <div className="row m-3 d-flex justify-content-center">
                        <p>{receipe.fields.describe}</p>
                        <img className="shadow-sm p-3 bg-light border rounded w-75"
                             src={receipe.fields.image.fields.file.url} alt={receipe.fields.receiperecipe}/>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal-md justify-content-center">
                            <li className="list-group-item">Prep Time: {receipe.fields.prepare["Prep Time"]}</li>
                            <li className="list-group-item">Cook Time: {receipe.fields.prepare["Cook Time"]}</li>
                            <li className="list-group-item">Total Time : {receipe.fields.prepare["Total Time"]}</li>
                        </ul>
                    </div>
                    <div className="row m-3 d-flex justify-content-center">
                        <div
                            className="ingredients col-lg-5 mr-1 mb-1 shadow-sm p-3 border-dark rounded background white">
                            <section dangerouslySetInnerHTML={{__html: marked(receipe.fields.ingredients)}}/>
                        </div>
                        <div className="col-lg-6 mr-1 mb-1 shadow-sm p-3 border  rounded description background white">
                            <section dangerouslySetInnerHTML={{__html: marked(receipe.fields.directions)}}/>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default RecipeMeal;
