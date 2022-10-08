
const Upload  = require('../models/Upload');

// Create & Upload Image

module.exports.createUpload = async (req, res) => {

     try {
        const uploadData = await Upload({
            title:  req.body.title,
            photo : req.file.photo
        })
        const data = await uploadData.save()
        res.status(201).json({msg : 'Upload Success', data})
     } catch (error) {
        res.status(400).json(error)  
     }
}


module.exports.getAllImages = async (req, res) => {
    //  const {name, photo} = req.body
     try {
        const getImages = await Upload.find({})
        res.status(200).json(getImages)
     } catch (error) {
        res.status(400).json(error)  
     }
}


module.exports.searchFile = async (req, res) => {
   const query =  {}
   if(req.query.keyword) {
      query.$or=[
         {"title" : {$regex: req.query.keyword, $options: 'i'}}
      ]
   }
    try {
       const searchData = await Upload.find(query)
       .populate('title')
       res.status(200).json(searchData)
    } catch (error) {
       res.status(400).json(error)  
    }
}



