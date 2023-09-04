import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import UserRecipes from '../components/userRecipes';
import '../CSS/Profile.css'; // Import the CSS file

const Profile = () => {
  const params = useParams();
  const userId = params.user;

  const [formData, setFormData] = useState({
    title: '',
    cooking_time: '',
    ingredients: '',
    instructions: '',
    nutritional_info: '',
    cuisine_type: '',
    image: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/recipes/', formData);

      if (response.status === 200) {
        // Recipe was successfully created on the server
        alert('Recipe created successfully');
        // Clear the form
        setFormData({
          title: '',
          cooking_time: '',
          ingredients: '',
          instructions: '',
          nutritional_info: '',
          cuisine_type: '',
          image: '',
        });
      } else {
        alert('Recipe creation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error creating recipe:', error);
      alert('Recipe creation failed. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
    <div className="container">
     <h1 className='text-danger'>Welcome!!</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Cooking Time</label>
            <input
              type="text"
              name="cooking_time"
              value={formData.cooking_time}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Ingredients</label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Instructions</label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Nutritional Info</label>
            <input
              type="text"
              name="nutritional_info"
              value={formData.nutritional_info}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Cuisine Type</label>
            <input
              type="text"
              name="cuisine_type"
              value={formData.cuisine_type}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Image Link</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <button className="btn btn-danger" type="submit">
            Create Recipe
          </button>
        </form>
      </div>
      </div>
      <UserRecipes userId={userId} />
      <Footer />
      </>
  );
};

export default Profile;
