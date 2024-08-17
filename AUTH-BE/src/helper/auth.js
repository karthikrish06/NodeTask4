import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken'

//hashing the pwd
const SALT =   10
const createHash = async(data) => {
    let salt = await bcrypt.genSalt(SALT)
    let hash = await bcrypt.hash(data,salt)
    return hash
}

const hashCompare = async(data, hash) => {
    return await bcrypt.compare(data,hash)
}
//creating jwt token
const createToken = async(payload) => {
    // console.log(process.env.JWT_SECRET);
    let token = await Jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRY 
    })
    return token
}

const decodeToken = async(token) => {
    return await Jwt.decode(token)
}

//middleware - it  is a fn that will execute between req & res

//mailid based authentication
const authenticate = async(req,res,next) => {
    // console.log("visited");
    //get the token value from login and place in bearer token in postman authorization and send the request
    //now get the token value here 
    let token  = req?.headers?.authorization?.split(' ')[1]
    // console.log(token);
    if(token){
        let payload = await decodeToken(token)
        let currentTime = +new Date()
        // console.log(payload.exp);   //payload exp time
        // console.log(Math.floor(currentTime/1000) );  //current time  roundeed off and removed the millseconds by dividing by 1000
        if(Math.floor(currentTime/1000)<payload.exp){
            next()
        }else{
            res.status(402).send({
                message :"Session expired"
            })
        }        
    }else{
        res.status(402).send({
            message :"Unauthorised access"
        })
    }    
}

//role based authenticate
const adminGuard = async(req,res,next) => {
    let token  = req?.headers?.authorization?.split(' ')[1]
    if(token){
        let payload = await decodeToken(token)
        if(payload.role === "admin"){
            next()
        }else{
            res.status(402).send({
                message :"Only admins are allowed"
            })
        }        
    }else{
        res.status(402).send({
            message :"Unauthorised access"
        })
    }    
}

export default {
    createHash,
    hashCompare,
    createToken,
    authenticate,
    adminGuard
}