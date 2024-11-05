export const UploadMedia = async (req, res) => {

    console.log("[message]: Ready for File upload !");
    console.log(req.body); console.log(req.files);

    try 
    {
        let i; let media = [];

        for(i = 0; i < req.files.length; i ++) 
        { 
            media[i] = { 
                file_num : i + 1,
                file_path: `http://localhost:${ process.env.PORT }/${ req.files[i].path }`
            }; 
        }
        
        res.status(200).json({ msg:`${ media.length } file(s) uploaded successfully !`, media});
     
    }   catch (error) { res.status(500).json({ msg: `Upload Error: ${ error }` }); }
  
};