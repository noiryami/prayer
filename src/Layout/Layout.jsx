
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const Layout = () => {
  return (<>
  
      <Header />
      <div > <Outlet/> </div>
      <Footer/>
  </>
  )
}
   
export default Layout

