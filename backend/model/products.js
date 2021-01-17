const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    description:{
        type: String,
        required: true
    },
    price:{
        type:SchemaTypes.Double,
        required: true

    }, 
    countInStock:{
        type: number,
        required: true
    },
    imageURI:{
        type: String, 
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }, 
    feachered:{
        type:Boolean
    },
    discount:{
        type: Boolean, 
        default: false,
    },
    newPrice:{
        type: String,
    },
    barand:{
        type: String,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category', 
        required: true
    }
})


const Product = mongoose.model('product', productSchema)

module.exports = Product