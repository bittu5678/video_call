const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
       
        name:{
            type:String,
            required:true,
            minlenght:3,
            maxlength:100
        },
        email:{
            type:String,
            required:true,
            minlenght:3,
            maxlength:200,
            unique:true,
            match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
        },
        password:{
            type:String,
            required:true,
            minlenght:3,
            maxlength:200,

        },
},{
    timestamps:true,
});


const authentication = mongoose.model("authentication", userSchema);

module.exports = authentication;