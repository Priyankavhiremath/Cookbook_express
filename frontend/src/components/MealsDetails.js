import React, {useState, useEffect, Fragment} from 'react';
import {useParams} from 'react-router-dom';
import {Client} from '../utils/Client';
import MealCard from './layout/MealCard';

const MealsDetails = () => {
    const {mealtype} = useParams()
    const [meals, setmeals] = useState([])

    useEffect(() => {
        Client.getEntries()
            .then((res) => {
                console.log(res.items);
                setmeals(res.items)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Fragment>
            <div className='container mt-4 p-5 recipe shadow-sm border border-dark rounded recipebackground'>
                <div className="row">
                    {
                        meals &&
                        meals
                            .filter((m) => m.fields.mealstype === mealtype)
                            .map((meal) => {
                                return (
                                    <Fragment>
                                        <div className="col-md-4">
                                            <MealCard mealpic={meal.fields.image.fields.file.url}
                                                      title={meal.fields.receipe} describe={meal.fields.describe}
                                                      mealtype={meal.fields.mealstype} mealid={meal.fields.id}/>
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
