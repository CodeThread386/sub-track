import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String, 
        required: [true, 'User name is required'], 
        trim: true, 
        minLength: 2, 
        maxLength: 50
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
    },

    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50,
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;