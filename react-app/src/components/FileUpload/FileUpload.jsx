import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { fileUpload } from '../../api'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import './flie.scss'
const FileUpload = () => {
 
  const[title, setTitle] = useState('')
  const[file, setFile] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) =>{
      e.preventDefault()
      const formData  = new FormData()
      formData.append('title', title)
      formData.append('photo', file)

       try {
         const res = await fileUpload(formData)
         console.log('Data submitted from frontend..', res)
         toast.success('Image uploaded successfully')
         navigate('/')
       } catch (error) {
         console.log(error)
       }
  
  
  }
  return (
    <div className="form_div">
        <h2>Add Image</h2>
         <form className='form' onSubmit={handleSubmit} encType="multipart/form-data">
             <input 
                type="text" 
                name="title"
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter title.."/>
             <input 
                type="file"
                onChange={(e)=>setFile(e.target.files[0])}
               name="photo"/>
             <button type='submit'>Add</button>
         </form>
    </div>
  )
}

export default FileUpload