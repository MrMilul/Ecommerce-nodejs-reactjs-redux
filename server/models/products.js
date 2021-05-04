const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    price: {type: String, required: true}, 
    img: {type: String}, 
    desc: {type: String}, 
    countInStock: {type: Number}, 
    ingredientes: {type: String}, 
    raiting: {type: Number}, 
    numReview: {type: String}, 
    category: {
       type: mongoose.Schema.Types.ObjectID, 
       ref: "Category"
    }
})

exports.module = mongoose.model('Product', productSchema)

