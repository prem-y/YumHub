const express = require('express');
const router = express.Router();
const recipeController = require('../Controllers/recipeController');

router.get('/',recipeController.getAllRecipes);
router.post('/',recipeController.createRecipe);

module.exports=router;