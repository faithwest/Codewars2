import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-content">{children}</div>
     
     <Outlet />
  </div>
  
  ) 
};

export default Layout;