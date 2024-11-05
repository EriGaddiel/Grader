import axios from "axios";

const MEDIA_UPLOAD_URL = "http://localhost:5000/api/media/mediaUpload";
export async function UploadMedia (array)
{

    console.log(`[msg]: request was sent successfully at: ${ MEDIA_UPLOAD_URL }`);
    
    console.log(array);

    const formData = new FormData(); 

    formData.append("msg", "File upload request")

    for(let i = 0; i < array.length; i ++)
    {
        formData.append("files", array[i]);
    }

    const response = await axios.post("http://localhost:5000/api/media/mediaUpload", formData);

    return response;
};
