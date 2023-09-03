// const jwt = require('jsonwebtoken');
// const authMiddlware = require('../middlewares/authMiddleware');
// const User = require('../models/User');
// const authTokenGenerator = require('../utils/authTokenGenerator');


const express = require('express');
const asynchHandler = require('express-async-handler');
const Book = require('../models/recipeModel');
const recipeRouter = express.Router();

//Create Book
recipeRouter.post(
  '/',

  asynchHandler(async (req, res) => {
    try {
      const book = await Book.create(req.body);
      res.status(200);
      res.json(book);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

recipeRouter.get(
  '/',
  asynchHandler(async (req, res) => {
    const books = await Book.find();
    //Compare password
    if (books) {
      res.status(201);
      res.send(books);
    } else {
      res.status(401);
      throw new Error('Server error');
    }
  })
);

//Delete book

recipeRouter.delete(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(book);
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
      const book = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(book);
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
      const book = await Book.findById(req.params.id);
      res.status(200);
      res.send(book);
    } catch (error) {
      res.status(500);
      throw new Error('No book found');
    }
  })
);

module.exports = { recipeRouter };
