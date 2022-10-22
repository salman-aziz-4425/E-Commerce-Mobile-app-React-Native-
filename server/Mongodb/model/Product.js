const mongoose = require("mongoose");

const ProductSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
    Image:{
        type:String,
        data:Buffer,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const Product=mongoose.model('productInfo',ProductSchema)

module.exports=Product