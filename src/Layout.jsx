import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-content">{children}</div>
     
      <Outlet /> 
    
      <Footer /> {/* Add the Footer component here */}
    
    </div>
  )
};

export default Layout;