const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,"Your email is required"],
        unique: true,
    },
    username:{
        type: String,
        required: [true, "Your username is required"],
    },
    password:{
        type: String,
        required: [true, "Your password is required"],
    },
    createdAt:{
        type: Date,
        default: new Date(),
    },
});
