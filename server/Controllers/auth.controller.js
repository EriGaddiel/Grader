import bcryptjs from 'bcryptjs'
import User from '../Models/user.model.js'
import { errorHandler } from '../utils/error.js'

export const signup = async (req, res, next) => {
    
    const {username, email, password} = req.body

    if (!username || !email || !password || username ==='' || email ==='' ||password ==='') {
       next(errorHandler(400, "All fields are required"))
    }

    if (username.length < 3) return next(errorHandler(400, "Username is at least 3 characters"))

    else if (password.length < 6) return next(errorHandler(400, "Password most be at least 6 characters"))

    try {
        const existingUser = await User.findOne({$or: [{ username }, { email }]})
        if (existingUser) {
            return next(errorHandler(400, "Username or email already exist"))
        }
    } catch (error) {
        return next(error)
    }



    const hashedPassword = bcryptjs.hashSync(password, 10)

    try {
        const newUser =  new User({
            username, 
            email, 
            password : hashedPassword
        })
        await newUser.save()

        return res.status(200).json({message : "Sign In successfully"})  

    } catch (error) {
        next(error)
    }

}