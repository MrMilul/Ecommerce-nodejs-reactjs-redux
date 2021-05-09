const mongoose = require('mongoose');

const DB = async() =>{
    try{
        await mongoose.connect ( process.env.DATABASE_LINK, 
            {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
    }catch(err){
        console.log("MongoDB Connection Fail")
        console.log(err.message)
        process.exit(1)
    }
}

module.exports =  DB