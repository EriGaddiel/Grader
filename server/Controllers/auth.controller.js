import bcryptjs from 'bcryptjs'
import User from '../Models/user.model.js'

export const signup = async (req, res) => {
    
    const {username, email, password} = req.body

    if (!username || !email || !password || username ==='' || email ==='' ||password ==='') {
        return res.status(400).json({ message: " All Fields are required"})
    }
 
    if (username.length < 3) return res.status(500).json({ message: "User name most be at least 3 characters"})
    
    else if (password.length < 6) return res.status(500).json({message: "Password most be at least 6 characters"})


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
        res.status(500).json({message: error.message})
    }

}