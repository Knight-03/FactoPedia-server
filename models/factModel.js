const mongoose = require('mongoose')
const slugify = require('slugify');


const FactSchema = new mongoose.Schema(
    {
        fact : {
            type : String,
            required : [true, 'A Fact must have some Text'],
            trim : true,
            maxlength : [200, "A Fact can't be longer than 200 characters"],
            minlength : [5, "A Fact can't be smaller than 5 characters"]
        },
        category: {
            type : String,
            required : [true, 'A Fact must have a category']
        },
        likes : {
            type : Number, 
            default : 0,
        },
        repeats : {
            type : Number, 
            default : 0,
        },
        disputed : {
            type : Number, 
            default : 0,
        }
    }
)

const Fact = mongoose.model('Fact',FactSchema);

module.exports = Fact;