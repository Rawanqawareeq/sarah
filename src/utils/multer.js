import multer from 'multer';
import { nanoid } from 'nanoid'
function fileUpload(){
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'Uploads')
        },
        filename:(req, file, cb) =>{
          cb(null,Date.now()+"_"+nanoid()+"_"+ file.originalname)
        }

})
function fileFilter (req, file, cb) {

   if(['image/jpeg','image/svg+xml','image/gif'].includes(file.mimetype)){
       
    cb(null, true);
   }else{

    cb("invaild format", false);
   }
  
  }
const upload = multer({fileFilter,storage})
return upload;
}
export default upload;