import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import { useParams } from 'react-router-dom';
const Details = () => {
    const params = useParams();
    let id = params.id;
    const [recipeData,setRecipeData] = useState([]);
    useEffect(() => {
        fetchRecipe();
    })
    const fetchRecipe = () =>{
        axios.get(`http://localhost:4000/api/recipes/${id}`)
        .then((response)=>{
            setRecipeData(response.data);

        })
        .catch((error) => {
            console.error(error);
        })
    }
    const logo ={
      fontFamily:"'Concert One', cursive",
      fontSize: "2em",
      position:"relative",
      top:"0.2em",
      left:"0.3em"
  }
  return (
    <>
    <nav className='navbar-expand-lg bg-danger p-1'>
        <ul className="d-flex justify-content-between list-unstyled ">
            <li>
            <Link to={'/home'} className="text-decoration-none text-white" style={logo}>YumHub</Link>
            </li>

            <li>
            <Link to={'/home'} className="btn mt-2 fs-5 me-2 bg-dark text-white">Back</Link>
            </li>
        </ul>
    </nav>

   
    <div className="" style={{
      border:"solid 1px",
      borderRadius: "2px",
      margin:"20px", 
      marginRight:"200px",
      marginLeft:"200px"
    }}>
        {recipeData && (
          <>
              <div className="m-2">
              <h1 className="">
                {recipeData.title}
              </h1>
                  <img src={recipeData.image} alt="" style={{
                    borderRadius:"4px",
                    height:"200px"
                  }}/>
                  
                  
                  <p>Cooking time: {recipeData.cooking_time}min</p>
                  <h3>Ingredients:</h3>
                  <p>{recipeData.ingredients}</p>
                  <h3>Instructions: </h3>
                  <p>{recipeData.instructions}</p>
                  <h3>Nutritional_info</h3>
                  <p>{recipeData.nutritional_info}</p>
    
              </div>

          </>
        )}
      </div>
    
    </>
  )
}

export default Details
//https://i.ibb.co/Rbb7kxP/img2.png