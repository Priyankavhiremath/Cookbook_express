import React, {Fragment, useEffect, useState} from "react";
import {Client} from "../utils/Client";
import MealCard from './layout/MealCard';
import Axios from 'axios'
import axios from "axios";
const Meals = () => {
    const [meals, setMeals] = useState([]);

    // useEffect(() => {
    //     Client.getEntries()
    //         .then((res) => {
    //             console.log(res.items);
    //             setMeals(res.items);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/recipes`).then((res)=>{
            console.log(res.data)
            setMeals(res.data)
        }).catch((err)=>{
            console.error(err)
        })
    }, [])


    return (
        <Fragment>
            <div className='container mt-4 p-5 recipe shadow-sm border border-dark rounded recipebackground'>
                <h3 className="text-danger">BREAKFAST</h3>
                <div className="row">
                    {meals && meals
                        
                        .map((meal) => {
                            return (
                                <Fragment key={meal.id}>
                                    <div className="col-md-4">
                                        <MealCard mealpic={`http://localhost:5000/image/${meal.image}`}
                                                  title={meal.title} describe={meal.description}
                                                  mealtype={meal.mealtype} mealid={meal.id}/>
                                    </div>
                                </Fragment>
                            );
                        })}
                </div>
                <h3 className="mt-5 text-black">LUNCH</h3>
                <div className="row">
                  
                </div>
                <h3 className="mt-5 text-black">DINNER</h3>
                <div className="row">
                   
                </div>
            </div>
        </Fragment>
    );
};

export default Meals;
