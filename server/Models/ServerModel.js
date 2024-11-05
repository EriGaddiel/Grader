import express, { urlencoded } from "express"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from "dotenv"

// Routes
import authRoutes from '../Routes/auth.route.js'
import postRoutes from '../Routes/postRoutes.js'
import mediaRoutes from '../Routes/mediaRoutes.js'

dotenv.config()


class Server{ 
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000
        this.databaseURI = process.env.MONGO_URL

        this.connectDatabase();

        this.middleware()

    }

    async connectDatabase() {
        try {
            mongoose.connect(this.databaseURI).then(() => {console.log("Connected to mongoDB")})           
        } catch (error) {
            console.error(`Database connection error: ${ error}`)
        }
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(urlencoded({ extended: true}))

        this.routes()

        this.app.use((err, req, res, next) => {
            const statusCode = err.statusCode || 500
            const message = err.message || 'Internal Server error' 
            res.status(statusCode).json({
                success: false,
                statusCode, 
                message 
            })
        })

    }

    routes(){
        this.app.use('/api/auth', authRoutes)
        this.app.use('/api/post', postRoutes)
        this.app.use('/api/media', mediaRoutes)
    }

    start(){
        this.app.listen( this.port, ()=>{
            console.log(`Server is running in port: ${ this.port }`)
        })
    }
}

export default Server

