import axios from "axios";
import { UploadMedia } from "../functions/mediaUpload.js";

export const CREATE_POST_REQUEST = async (mediaArray, plainData) => {
    if(mediaArray.length > 0) 
    { 
        // console.log("submitting grader");
        UploadMedia(mediaArray).then ((response) => { console.log(response); }).catch((error) => { console.log(error); }); 
    }
};
export const UPDATE_POST_REQUEST = async () => {};
export const DELETE_POST_REQUEST = async () => {};
