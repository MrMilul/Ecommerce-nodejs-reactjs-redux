const jwt = require("jsonwebtoken")



exports.isAuth = (req, res, next)=>{
    const authorization = req.headers.authorization;

    if(authorization){
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, process.env.JWT_SECRET, 
            
            (err, decode)=>{
                if(err){
                    res.status(400).json({message:"Invalid Token"})
                }else{
                    req.body = decode;
                    next()
                }
            }  
            )
    }else{
        res.status(401).json({message:"No Token"})
    }

}