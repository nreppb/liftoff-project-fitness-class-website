const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

// const schema = mongoose.Schema;

const userSchema = new Schema ( {
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        min: 3
    },

    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    creation_dt:{type:Date, require:true}

    // name: {
    //     type: String,
    //     required: true,
    // },

    // description: {
    //     type: String,
    // }, 

    // saltSecret:  {
    //     type: String,
// }
// },
    
//     {
//     timestamps: true,
    });

    userSchema.statics.hashPassword = function hashPassword(password){
        return bcrypt.hashSync(password,10);
    }

    userSchema.methods.isValid = function(hashPassword) {
        return bcrypt.compareSync(hashPassword, this.password);
    }

    const User = mongoose.model('User', userSchema);

    module.exports = User;