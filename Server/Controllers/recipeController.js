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
        const { img, title, cookingtime, ingredients, information } = req.body;
        const newRecipe = await Recipe.create({ img, title, cookingtime, ingredients, information });
        res.status(201).json({ message: "Added a Recipe!", recipe: newRecipe }); // Fix here
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};
