
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{width:"100%"}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
   
export default Layout

