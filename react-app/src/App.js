import React from 'react';
import './App.scss'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';

import { useSelector } from 'react-redux';
import {Toaster} from 'react-hot-toast'
import MyImage from './components/UploadImage/MyImage';
import FileUpload from './components/FileUpload/FileUpload';

const App = () => {
	const auth = useSelector((state)=> state.auth)
  return (
	<div>
           <div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  success : {
                    theme: {
                      primary : '#4aee88',
                    },
                  },
                }}
                />
            </div>
		<BrowserRouter>
             <Navbar/>
			<Routes>

				{
					auth._id ? (
					<Route path='/' element={<Dashboard/>}>
						<Route index element={<MyImage/>}/>	
						<Route path="file" element={<FileUpload/>}/>	
				  </Route>
					) : (
						<>
						<Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
					)
				}

                 {
					!auth._id && 
          <>
						   <Route path='/login' element={<Login/>}/>
				        <Route path='/register' element={<Registration/>}/>
					
					</>
				 }
			
			</Routes>
		</BrowserRouter>
	    
	</div>
  );
}

export default App;
