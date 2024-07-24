import express from "express"
import { signin } from "../Controllers/auth.controller.js"

const router = express.Router()

router.post('/signin', signin)

export default router