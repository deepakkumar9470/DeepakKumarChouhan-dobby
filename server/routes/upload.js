require('dotenv').config();

const axios = require('axios')
const express = require('express')

const router = express.Router()
// const BASE_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}`

// const auth = {
//     username: process.env.CLOUD_API_KEY,
//     password: process.env.CLOUD_API_SECRET,
// }


const multer = require('multer');
const { createUpload ,getAllImages, searchFile} = require('../controllers/imageController');


const storage = multer.diskStorage({
   destination : (req,file,cb) =>{
      cb(null, `public/uploads/${file.fieldname}`)
   },
   
   filename : (req,file,cb) =>{
      cb(null, `${Date.now()}-${file.originalname}`)
   }
});

const upload = multer({storage})


// @/api/image/upload
router.post('/upload',upload.single('photo') ,createUpload)


// @/api/image/get
router.get('/get',getAllImages)



// @/api/image/search?title=xbmnsbnbnd
router.get('/search', searchFile)


// For Cloudinary


// @ /api/images
// router.get('/', async (req, res) => {
//     try {
//         const response = await axios.get(BASE_URL + '/resources/image', { auth });
//         res.send(response.data)
//     } catch (error) {
//         console.log(error)
//     }


// });

// // @ /api/images/search
// router.get('/search', async (req, res) => {

//     try {
//         const response = await axios.get(BASE_URL + '/resources/search', {
//             auth,
//             params: {
//                 expression: req.query.expression
//             }
//         });
//         return res.send(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// });






module.exports = router