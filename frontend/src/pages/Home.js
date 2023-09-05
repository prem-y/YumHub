import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const [recipes, setRecipes] = useState("");
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, []); // Empty dependency array to run fetchRecipes only once on mount

  const params = useParams();
  let userId = params.user;

  const fetchRecipes = () => {
    axios
      .get(`http://localhost:4000/api/recipes?title=${searchQuery}`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    fetchRecipes(); // Trigger a new fetch when the search form is submitted
  };

  return (
    <>
      <Header userId={userId} />
      <div className="container mt-5">
        <form className="d-flex" onSubmit={(e) => searchHandler(e)}>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for recipes.."
            className="form-control"
            value={searchQuery} // Add value attribute to input field
            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          />
          <button type="submit" className='btn btn-outline-dark'>Search</button> 
        </form>
        <br />
        {!recipes?(
          <>
              <p>No recipes found!</p>
          </>
        ) : (
          <>
          <div className="row">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="col-md-4">
                    <div className="card">
                      <img src={recipe.image} alt="image is expired!" className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title">{recipe.title}</h3>
                        <ul className="d-flex flex-row list-unstyled justify-content-between">
                          <li>
                            <span>
                              <img src="./assets/clock.png" alt="" height={'50px'} />
                            </span>
                            <span className="h4">{recipe.cooking_time}min</span>
                          </li>
                          <li>
                            <Link to={{ pathname: `/details/${userId}/${recipe._id}` }} className="btn bg-dark text-white">
                              More info
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
