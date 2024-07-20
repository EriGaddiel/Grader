import express, { urlencoded } from "express"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()


class Server{ 
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000
        this.databaseURI = process.env.MONGO_URL

        this.connectDatabase();

        this.middleware()

        this.routes()
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
    }

    routes(){

    }

    start(){
        this.app.listen( this.port, ()=>{
            console.log(`Server is running in port: ${ this.port }`)
        })
    }
}

export default Server

