const jwt = require('jsonwebtoken');
const User = require('./../models/userModel')

exports.signup = async (req, res, next) => {

    try {
        const newUser = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password 
        })
        const token = jwt.sign( { id : newUser._id }, process.env.JWT_SECRET, { expiresIn : process.env.JWT_EXPIRES_IN })

        res.status(201).json({
            status : 'success',
            token,
            data : {
                user : newUser
            }
        })
    } catch (err) {
        res.status(500).json({
            status : 'Fail',
            message : err.message || "failed to SignUp"
        })
    }
}