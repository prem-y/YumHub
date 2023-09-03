const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cooking_time: { type: Number, required: true },
  ingredients: { type: String, required: true },
  instructions: {type: String, required: true},
  nutritional_info: {type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model("Recipe", recipeSchema);
