import Post from "../Models/postModel.js";
import { errorHandler } from "../utils/error.js";
import CheckEmptyEntires from "../utils/CheckEmptyEntries.js";


// Create Post
export const CreatePost =  async (req, res, next) => {

    const { title, caption, privacy, userID, mediaFilesLink } = req.body;

    if(CheckEmptyEntires([ title, caption ]) > 0) { next(errorHandler( 500, "the Title and Caption fields must be filled" )); }

    try {
        const __new_post = new Post({ title, caption, privacy, userID, mediaFilesLink }); 
        await __new_post.save();
        
        return res.status(200).json({ msg: "post was uploaded successfully !" });
    } 
    catch (error) { return error; }

};

export const DeletePost = async (req, res) => {};
export const UpdatePost = async (req, res) => {};
export const FetchPosts = async (req, res) => {};