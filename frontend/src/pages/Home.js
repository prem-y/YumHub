import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from "../components/Footer";
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(()=>{
    fetchRecipes();
  })

  const fetchRecipes = () =>{
    axios.get("http://localhost:4000/api/recipes")
    .then((response)=>{
      setRecipes(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
  };
  const moreinfo= ()=>{

  }
  const handleImgClick = ()=>{
    
  }
  return (
    <>
      <Header/>
      <div className="container mt-5">
        {recipes && (
          <div className="row">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4">
                <div className="card">
                <img src={recipe.image} alt="image is expired!" class="card-img-top"/>
                  <div className="card-body">
                    <h3 className="card-title">{recipe.title}</h3>
                    <ul className='d-flex flex-row list-unstyled justify-content-between'>
                      <li>
                      <span><img src="./assets/clock.png" alt="" height={'50px'} onClick={handleImgClick}/></span>
                      <span className='h4'>{recipe.cooking_time}min</span>
                      </li>
                      <li><button className='btn bg-dark text-white'>More info</button></li>
                    </ul>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}

export default Home

