// import multer from 'multer'

// const storage=multer.diskStorage({
//     filename:function(req,file,callback){
//         callback(null,file.originalname)
//     }
// })


// const upload=multer({storage})

// export default upload;



// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, "uploads/"); // Ensure the 'uploads' folder exists
//     },
//     filename: function (req, file, callback) {
//         callback(null, Date.now() + "-" + file.originalname); // Unique filename
//     }
// });

// const upload = multer({ storage });

// export default upload;

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const uploads = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      cb(new Error("Only image files are allowed"), false);
    } else {
      cb(null, true);
    }
  },
});

export default uploads;

