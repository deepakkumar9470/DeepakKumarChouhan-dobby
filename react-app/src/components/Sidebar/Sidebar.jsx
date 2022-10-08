
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import './sidebar.scss'

const Sidebar = () => {
 
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">IMAGE UPLOAD App</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">IMAGE SECTION</p>
         <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>All Images</span>
          </li>
         </Link> 

         <p className="title">UPLOAD SECTION</p>
         <Link to="/file" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Add File</span>
          </li>
         </Link> 
      
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;