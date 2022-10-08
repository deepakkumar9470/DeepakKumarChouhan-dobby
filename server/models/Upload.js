const mongoose = require('mongoose')


const UploadSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    photo  : {type: String},
   
},{timestamps : true})



module.exports = mongoose.model('upload', UploadSchema)
