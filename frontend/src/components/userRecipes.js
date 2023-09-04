import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const UserRecipes = ({userId}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    fetchRecipes();
  })

  const fetchRecipes = () =>{
    axios.get(`http://localhost:4000/api/recipes/user/${userId}`)
    .then((response)=>{
      setRecipes(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
  };
  const handleDeleteRecipe = (recipeId) => {
    axios
      .delete(`http://localhost:4000/api/recipes/${recipeId}`)
      .then((response) => {
        if (response.status === 200) {
          // Recipe deleted successfully, fetch updated recipes
          fetchRecipes();
        } else {
          console.error('Failed to delete recipe');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    <div className="container mt-5">
      <h1>My recipes</h1>
      {recipes && (
        <div className="row">
          {recipes.map((recipes)=>(
            <div key={recipes.id} className="col-md-3">
              <div className="card">
              <img src={recipes.image} alt="image is expired!" className="card-img-top" />

              <h3 className="m-1">{recipes.title}</h3>
              <ul className="d-flex justify-content-between list-unstyled m-1">
                <li>
                  <Link className="btn btn-outline-success">Edit</Link>
                </li>
                <li>
                  <Link className="btn btn-outline-dark" to={{pathname:`/details/${userId}/${recipes._id}`}}>View</Link>
                </li>
                <li>
                  <button className="btn btn-outline-danger" onClick={() => handleDeleteRecipe(recipes._id)}>Delete</button>
                </li>
              </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default UserRecipes;
