const mongoose = require('mongoose')



const orderSchema = new mongoose.Schema({
    orderItems : [
        {
            name:{type:String, required:true},
            Qty:{type:String, required:true},
            img:{type:String, required:true},
            price:{type:Number, required:true},
            product:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:"Products",
                required: true
            }
        }
    ],

    shippingAddress:{
        fullName:{type:String, required:true},
        address:{type:String, required:true},
        city:{type:String, required:true},
        country:{type:String, required:true},
        postalCode:{type:String, required:true},
    },

    paymentMethod:{type:String, required:true},

    itemsPrice:{type:Number, required:true},
    shippingPrice:{type:Number, required:true},
    taxPrice:{type:Number, required:true},
    totalPrice:{type:Number, required:true},

    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
        require:true
    },

    isPaid: {type: Boolean, default: false},
    paidAt:{type:Date},


    isDelivered:{typw:Boolean, default:false},
    deliveredAt:{type:Date}

},
{
    timestamps:true
}

)






module.exports = mongoose.model("Order", orderSchema)