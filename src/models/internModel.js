const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


const internSchema = new mongoose.Schema({
    
    name :{
        type : String,
        required : true
    },
    
    email :{
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        trim:true,
            },

    mobile :{
            type : String,
            required : true,
            unique : true,
            trim:true,
            
            },

    collegeId :{
        type : ObjectId,
        required : true,
        ref : "college",
        trim : true
    },
    isDeleted: {
        type : Boolean,
        default: false
        }
    }//,{ timestamps: true }
);

module.exports = mongoose.model('intern', internSchema) 


