const express = require('express')
const Router = express.Router()

const { Pool } = require("pg")
const pool = new Pool()

// GET multiple recipes *******************************************
Router.get('/', (req, res) =>{
    pool
        .query("Select * FROM Recipes")
        .then((data) => res.json(data.rows))
        .catch((err) => res.sendStatus(500))
} )
//////get one recipe *********************************************
Router.get("/:id", (req, res)=>{
    const {id} = req.params;
    pool
        .query("SELECT * FROM recipes WHERE id=$1", [id] )
        .then(data => res.json(data.rows))
        .catch(err => res.sendStatus(500))
})
//////delete one recipe ********************************************
Router.delete('/:id' , (req,res)=>{
    const {id} = req.params;
    const deleteOne={
        text:`DELETE FROM recipes WHERE id=$1 RETURNING *`,
        values: [id]
    }
    pool
    .query(deleteOne)
    .then((data)=>res.status(201).json(data.rows))
    .catch((err)=>res.sendStatus(500))

})
//////Post one recipe TIM ************************************************
  Router.post("/", (req, res) => {
    console.log(req.body)
    const { title, description, ingredients, directions, mealtype, image, cook_time, prep_time } = req.body;

  const createOneRecipes = {
    text: `
    INSERT INTO recipes ( title, description, ingredients, directions, mealtype, image, cook_time,prep_time)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `,
    values: [title,description,ingredients,directions, mealtype, image, cook_time, prep_time]
}
     pool
        .query(createOneRecipes)
        .then((data) => res.status(201).json(data.rows))
        .catch((err) => {
            res.sendStatus(500)
            console.log(err)})
   
});
//////put one recipe priyanka ************************************************************************
Router.put('/:id', (req, res) =>{
    const {id} =req.params
    const {title, description, ingredients, directions, mealtype, image, cook_time, prep_time} = req.body
    
    const editRecipe = {
        text:`
        UPDATE recipes
        SET title=$1, description=$2 ,ingredients=$3 , directions=$4 , mealtype=$5 , image=$6 , cook_time=$7 , prep_time=$8 
        WHERE id=$9
        RETURNING *
        `,
        values: [title, description, ingredients, directions, mealtype, image, cook_time, prep_time,id]
    }
    pool.query(editRecipe)
        .then(data => res.status(200).json(data.rows))
        .catch(err => res.sendStatus(500))
})
module.exports= Router