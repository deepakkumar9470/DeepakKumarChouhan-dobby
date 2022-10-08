import React,{useState,useEffect} from 'react'

import './myimage.scss'
import images from '../../api-mock.json'
import { getALlimages ,searchImages} from '../../api'
const MyImage = () => {
  
  const [imageData, setImageData] = useState([])
  // const [imageData, setImageData] = useState(images.resources)
  const [searchVal, setSearchVal] = useState('')
  
  useEffect(() => {
   const fetchImagedData = async () =>{
       try {
        const res = await getALlimages()
        setImageData(res.data)
       } catch (error) {
        console.log(error)
       }
   }
   fetchImagedData()
  }, [])
  
  const handleSearch = async (e) =>{
    e.preventDefault()
    const serachData = await searchImages(searchVal)
    setImageData(serachData.data)
  }
  return (
 <>
   <div className="form">
      <input 
         value={searchVal} 
         onChange={(e)=>setSearchVal(e.target.value)} 
         type="text" 
         placeholder="Search image.." />
      <button onClick={(e)=>handleSearch()}>Search</button>
   </div>
    <div className='image_container'>
    
     
        {
         !imageData ? <p>Loading Imgages wait..</p> : 
         (
          imageData.map((item) => (
            <div key={item.public_id} className="card">
              {/* <img src={item.url} alt={item.public_id} /> */}
              <img src={item.photo} alt="myimage" />
              <p>{item.title}</p>
            </div>
          ))
         )
        }
   </div>
    
 </>
  )
}

export default MyImage