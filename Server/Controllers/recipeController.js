const Recipe = require('../Models/recipeModel');

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createRecipe = async (req, res) => {
    try {
      const { title, cooking_time, ingredients, nutritional_info, image } = req.body;
      const newRecipe = await Recipe.create({
        title,
        cooking_time,
        ingredients,
        nutritional_info,
        image,
      });
      res.status(201).json({ message: "Added a Recipe!", recipe: newRecipe });
    } catch (error) {
      const errorMessage = error.errors[0].message;
      res.status(400).json({ error: errorMessage });
    }
  };
  
