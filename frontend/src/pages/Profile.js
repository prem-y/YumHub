import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import UserRecipes from '../components/UserRecipes'
const Profile = () => {
  const params = useParams();
  let userId = params.user;

  const [formData, setFormData] = useState({
    title: '',
    cooking_time: '',
    ingredients: '',
    instructions: '',
    nutritional_info: '',
    cusine_type: '',
    image: '',
    username: `${userId}`,
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
          cusine_type: '',
          image: '',
          username: '',
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
    <div>
      {userId}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
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
          />
        </div>

        <div className="form-group">
          <label>Ingredients: </label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>instructions: </label>
          <input
            type="text"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Nutritional info: </label>
          <input
            type="text"
            name="nutritional_info"
            value={formData.nutritional_info}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cusine type: </label>
          <input
            type="text"
            name="cusine_type"
            value={formData.cusine_type}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image Link: </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Create Recipe
        </button>
      </form>
      <hr />
      <UserRecipes userId={userId}/>
      <Footer/>
    </div>
  );
};

export default Profile;
