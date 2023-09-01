const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cooking_time: { type: Number, required: true },
  ingredients: { type: [String], required: true },
  nutritional_info: {
    type: Object,
    properties: {
      calories: { type: Number },
      fat: { type: Number },
      sodium: { type: Number },
      carbohydrates: { type: Number },
      sugar: { type: Number },
      protein: { type: Number },
    },
  },
  image: { type: String },
});

module.exports = mongoose.model("Recipe", recipeSchema);
