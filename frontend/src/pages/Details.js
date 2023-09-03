import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
const Details = () => {
    const params = useParams();
    let id = params.id;
    const [recipe,setRecipe] = useState([]);
    useEffect(() => {
        fetchRecipe();
    })
    const fetchRecipe = () =>{
        axios.get(`http://localhost:4000/api/recipes/${id}`)
        .then((response)=>{
            setRecipe(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    }
  return (
    <div>
      {recipe.map}
    </div>
  )
}

export default Details
