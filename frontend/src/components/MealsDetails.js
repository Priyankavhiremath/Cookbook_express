import React, {useState, useEffect, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {Client} from '../utils/Client';
import Axios from "axios";
import MealCard from './layout/MealCard';

const MealsDetails = () => {
    const {mealtype} = useParams()
    const [meals, setmeals] = useState([])

    //my thinking was, that here we need to target the description?
    useEffect(() => {
        Axios.get(`http://localhost:5000/api/recipes`).then((res)=>{
            console.log(res.data)
            setmeals(res.data)
        }).catch((err)=>{
            console.error(err)
        })
    }, [])


    return (
        <Fragment>
            <div className='container mt-4 p-5 recipe shadow-sm border border-dark rounded recipebackground'>
                <div className="row">
                    {
                        meals &&
                        meals
                            .filter((m)=>m.mealtype == mealtype)
                            .map((meal) => {
                                return (
                                    <Fragment key={meal.id}> 
                                        <div className="col-md-4">
                                        <MealCard mealpic={`http://localhost:5000/image/${meal.image}`}
                                                  title={meal.title} describe={meal.description}
                                                  mealtype={meal.mealtype} mealid={meal.id}/>
                                        </div>
                                    </Fragment>
                                )
                            })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default MealsDetails
