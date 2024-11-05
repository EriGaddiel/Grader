import express from "express";
import { CreatePost, UpdatePost, DeletePost } from "../Controllers/postController.js";

const router = express.Router();

router.post("/create-post", CreatePost);
router.post("/update-post", UpdatePost);
router.post("/create-post", DeletePost);

export default router;