import axios from 'axios'


export const url = 'http://localhost:5500/api'


export const fileUpload  = async (data) =>{
   try{
     const response = await axios.post(`${url}/images/upload`, data)
     return response
   }catch(error){
      console.log(error)
   }
}




export const getALlimages =  async () =>{
   try {
    const response = await axios.get(`${url}/images/get`)
    console.log(response)
    return response
   } catch (error) {
      console.log(error)
   }
}


export const searchImages =  async (value) =>{
   try {
      const response = await axios.get(`${url}/images/search?${value}`)
      return response
     } catch (error) {
        console.log(error)
     }
}



/***** For Cloudinary *****/

// export const getALlimages =  async () =>{
//    try {
//     const response = await axios.get(`${url}/images`)
//     return response
//    } catch (error) {
//       console.log(error)
//    }
// }


// export const searchImages =  async (value) =>{
//   const params = new URLSearchParams()
//   params.append('expression', value)
//   const response = await axios.get(`${url}/images/search?${params}`)
//   return response
// }