const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cooking_time: { type: String, required: true },
  ingredients: { type: String },
  instructions: {type: String},
  nutritional_info: {type: String},
  cusine_type: {type: String},
  image: { type: String },
  username: {type: String}
});

module.exports = mongoose.model("Recipe", recipeSchema);
