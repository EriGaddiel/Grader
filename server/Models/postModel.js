import mongoose from "mongoose";

const properties = {
    title  : { type: String, min: 3, required: true },
    caption: { type: String, min: 3, required: true },
    privacy: { type: Boolean, default: true },
    userID : { type: mongoose.Types.ObjectId },
    mediaFilesLink: [{ type: String }]
};

const Post = mongoose.model("post", new mongoose.Schema({ properties }, { timestamps: true }));

export default Post;
