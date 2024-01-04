const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String, 
            required : [true, 'Please tell use your name!'],
            maxlength : [20 , 'A name must have less or equal than 20 characters'],
            minlength : [2, 'A name must be at least 2 characters']
        }, 
        email : {
            type : String,
            required: true,
            unique: true,
            lowercase : true,
            validate : [ validator.isEmail, 'Please provide a valid email'],
        },
        photo : {
            type : String,
            default : './default.png'
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: 8, 
        },
    }
)

userSchema.pre('save', async function (next) {

    // Only run this function if password was actually modified
    if(!this.isModified( 'password' )) {
        return next();
    }

    // Hash the password with cost of 12 
    this.password = await bcrypt.hash(this.password, 12);

    next();
})
 
const User = mongoose.model('User',userSchema);

module.exports = User;