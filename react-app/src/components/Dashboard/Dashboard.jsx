import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./dashboard.scss";
import {Outlet} from 'react-router-dom'
const Dashboard = () => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
           <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard