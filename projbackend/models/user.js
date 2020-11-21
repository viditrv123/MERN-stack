var mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1=require('uuid');
const md5 = require('md5');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    name:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    userinfo:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type:Number,
        default: 0
    }
  },{
      timestamps:true
  });


  module.exports=mongoose.model("User",userSchema);