import React, { useState } from "react";
import axios from 'axios'
const Postpage = () => {
  const [newmeal, setnewMeal] = useState({
    title: "",
    description: "",
    ingredients: "",
    directions: "",
    mealtype: "",
    image: "",
    cook_time: "",
    prep_time: "",
  });

  let handleForm = (event) => {
      setnewMeal({...newmeal, [event.target.name] : event.target.value })
  };

let submitMeal = (event)=>{
    event.preventDefault();

        if(newmeal.title !=="" && newmeal.description !==""&& newmeal.ingredients !=="" && newmeal.directions !=="" && newmeal.mealtype !=="" && newmeal.image !=="" && newmeal.cook_time !=="" && newmeal.prep_time !==""){
            let url=`http://localhost:5000/api/recipes`
            axios.post(url,newmeal).then((res)=>{
                    alert("added!")
            }).catch((err)=>{
                alert("test your details")
            })

            setnewMeal({
                title: "",
                description: "",
                ingredients: "",
                directions: "",
                mealtype: "",
                image: "",
                cook_time: "",
                prep_time: "",
            })

        }else{
            alert("please your all of forms")
        }

}

  return (
    // title, description, ingredients, directions, mealtype, image, cook_time, prep_time
   
    <div>
        {/* <pre>{JSON.stringify(newmeal)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="card animated zoomIn">
              <div className="card-header bg-teal text-white text-center">
                <h3>New Recipe</h3>
              </div>
              <div className="card-body ">
                <form>
                  <div className="form-group">
                    <label for="titleGroup">Title</label>
                    <input
                      value={newmeal.title}
                      name="title"
                      onChange={handleForm}
                      type="text"
                      className="form-control"
                      id="titleGroup"
                      placeholder="Recipe Name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="DescriptionGroup">Description</label>
                    <input
                      type="text"
                      value={newmeal.description}
                      name="description"
                      onChange={handleForm}
                      className="form-control"
                      id="DescriptionGroup"
                      placeholder="Description"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label for="ingredientsGroup">Ingredients</label>
                    <textarea
                      className="form-control"
                      value={newmeal.ingredients}
                      name="ingredients"
                      onChange={handleForm}
                      id="ingredientsGroup"
                      rows="3"
                      placeholder="Ingredients"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label for="directionsGroup">Directions</label>
                    <textarea
                      className="form-control"
                      value={newmeal.directions}
                      name="directions"
                      onChange={handleForm}
                      id="directionsGroup"
                      placeholder="Directions"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label for="mealsGroup">Meal Type</label>

                    <select
                      className="form-control"
                      id="mealsGroup"
                      value={newmeal.mealtype}
                      name="mealtype"
                      onChange={handleForm}
                    >
                      <option value="">Select Meal Type</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="textGroup">Image</label>
                    <input
                      value={newmeal.image}
                      name="image"
                      type="text"
                      onChange={handleForm}
                      className="form-control"
                      id="textGroup"
                      placeholder="Image Name"
                    ></input>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label for="cook_time">Cook Time</label>
                        <input
                          value={newmeal.cook_time}
                          name="cook_time"
                          onChange={handleForm}
                          type="text"
                          className="form-control"
                          id="cook_time"
                          placeholder="Cook Time"
                        ></input>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-group">
                        <label for="prep_time">Prep Time</label>
                        <input
                          value={newmeal.prep_time}
                          name="prep_time"
                          onChange={handleForm}
                          type="text"
                          className="form-control"
                          id="prep_time"
                          placeholder="Prep Time"
                        ></input>
                      </div>
                    </div>

                    <div>
                      <input
                        type="submit"
                        value="Save"
                        onClick={submitMeal}
                        className="btn btn-teal btn-sm"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postpage;
