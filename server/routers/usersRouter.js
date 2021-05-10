const express = require('express');
const usersRoute = express.Router();
const Users = require('../models/users')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../config/token.js')


// The below get http requist is for admin page and it will be complited soon!
// usersRoute.get('/', async(req, res)=>{
//     try{
//         const users = await Users.find({})
//         if(users.length === 0 ){
//             res.status(200).json({message: "user section is Empty!"})
//         }else{
//             res.status(200).json(users)
//         }
        
//     }catch(error){
//         res.json(error)
//     }
// })

usersRoute.post('/register', async(req, res)=>{
    try{
        const user = new Users({
            name: req.body.name,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            isAdmin: req.body.isAdmin
        })
        const createUser =  await user.save()
        res.status(201).json({
            id: createUser._id,
            name:createUser.name,
            email:createUser.email,
            isAdmin: createUser.isAdmin,
            token: generateToken(createUser)
        })
     
    }catch(error){
        res.status(400).json(error.message)
    }
    
})

usersRoute.post('/signin', async(req, res)=>{
    const user = await Users.findOne({email:req.body.email})
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.status(200).json({
                id: user._id, 
                name:user.name,
                email:user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)

            })
        }else{
            res.status(401).json({message: "Invalid Email or Password, please Try again!"})
        }
    }else{
        res.status(401).json({message: "Invalid Credential, please Try again!"})
    }
})
module.exports = usersRoute;