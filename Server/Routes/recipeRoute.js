// const jwt = require('jsonwebtoken');
// const authMiddlware = require('../middlewares/authMiddleware');
// const User = require('../models/User');
// const authTokenGenerator = require('../utils/authTokenGenerator');


const express = require('express');
const asynchHandler = require('express-async-handler');
const recipe = require('../models/recipeModel');
const recipeRouter = express.Router();

//Create Recipe
recipeRouter.post(
  '/',

  asynchHandler(async (req, res) => {
    try {
      const Recipe = await recipe.create(req.body);
      res.status(200);
      res.json(Recipe);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

recipeRouter.get(
  '/',
  asynchHandler(async (req, res) => {
    const Recipe = await recipe.find();
    //Compare password
    if (Recipe) {
      res.status(201);
      res.send(Recipe);
    } else {
      res.status(401);
      throw new Error('Server error');
    }
  })
);

//Delete Recipe

recipeRouter.delete(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const Recipe = await recipe.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(Recipe);
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  })
);

//Update

recipeRouter.put(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const Recipe = await recipe.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(Recipe);
    } catch (error) {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

//find a book
recipeRouter.get(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const Recipe = await recipe.findById(req.params.id);
      res.status(200);
      res.send(Recipe);
    } catch (error) {
      res.status(500);
      throw new Error('No Recipe found');
    }
  })
);

module.exports = { recipeRouter };
