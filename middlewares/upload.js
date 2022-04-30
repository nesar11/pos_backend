const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './assets/uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
const fileFilter = (req, filem, cb) =>{
    if (file.mimetype==='image/jpeg'
     || file.mimetype==='image/jpg'
     || file.mimetype==='image/png'){
    cb(null, true);
}
    else {
        cb(null, false)
    }
}

const upload = multer({storage: storage, 
    limits: {
        fileSize: 1024*1024*5
    },
    fileFilter: fileFilter
})

module.exports= multer({storage: storage}).single('pImage')