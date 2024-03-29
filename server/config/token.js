const jwt = require('jsonwebtoken');

exports.generateToken = (user)=>{
    return jwt.sign(
        {
        _id:user._id,
        name:user.name,
        email:user.emai,
        isAdmin:user.isAdmin
    }, 
    process.env.JWT_SECRET, 
    {expiresIn: "30d",}
    )
}