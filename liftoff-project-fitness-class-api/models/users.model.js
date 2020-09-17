const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ( {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 3
    },

    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    }, 
},
    
    {
    timestamps: true,
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;