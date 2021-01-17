const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema ({
    category: {
        type: String,
        unique: true,
        dropDups: true
    }
})

const Category = mongoose.model('category', categorySchema)
module.exports = Category