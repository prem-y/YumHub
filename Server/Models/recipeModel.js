const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    img: { type: String},
    title:{ type: String, required:true},
    cookingtime:{type:Number, required:true},
    ingredients:{type:String, required:true},
    information: {type:String, required:true},
});

module.exports = mongoose.model("Recipe", recipeSchema);