import bcryptjs from 'bcryptjs'
import User from '../Models/user.model.js'
import { errorHandler } from '../utils/error.js'

export const signup = async (req, res, next) => {
    
    const {username, email, password} = req.body

    if (!username || !email || !password || username ==='' || email ==='' ||password ==='') {
       next(errorHandler(400, "All fields are required"))
    }
 
    if (username.length < 3) next(errorHandler(400, "Username is at least 3 characters"))
    
    else if (password.length < 6) next(errorHandler(400, "Password most be at least 6 characters"))


    const hashedPassword = bcryptjs.hashSync(password, 10)


    const newUser =  new User({
        username, 
        email, 
        password : hashedPassword
    })

    try {
        await newUser.save()
        res.json({message : "Sign In sucessfully"})        
    } catch (error) {
        next(error)
    }

}