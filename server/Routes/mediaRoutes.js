import express from "express";

import { Upload } from "../utils/upload.js";

import { UploadMedia } from "../Controllers/mediaController.js";


const router = express.Router();

router.post("/mediaUpload", Upload.array("files"), UploadMedia);

export default router;
