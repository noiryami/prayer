import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css"

const {fullpage,pic} = styles;
const Prayers = () => {

  return (
      <>
          <div className={fullpage}>
            <div className={pic} >
              <Link to={"fajr"} style={{textDecoration:"none",color:"black"}}  >
                  <img src="/src/assets/fajr.png"  title="الفجر" />
                  <h2>الفجر</h2>            
             </Link>
              </div>
              <div className={pic} >
              <Link to={"dauhur"} style={{textDecoration:"none",color:"black"}}  >
                  <img src="/src/assets/dhuhr.png"  title="الظهر" />
                  <h2>الظهر</h2>            
             </Link>
        </div>
        <div className={pic} >
              <Link to={"asr"} style={{textDecoration:"none",color:"black"}}  >
                  <img src="/src/assets/asr.png" title="العصر" />
                  <h2>العصر</h2>            
             </Link>
        </div>
        <div className={pic} >
              <Link to={"maghrib"} style={{textDecoration:"none",color:"black"}}  >
                  <img src="/src/assets/maghrib.png" title="المغرب" />
                  <h2>المغرب</h2>            
             </Link>
        </div>
        <div className={pic} >
              <Link to={"isha"} style={{textDecoration:"none",color:"black"}}  >
                  <img src="/src/assets/isha.png" title="العشاء" />
                  <h2>العشاء</h2>            
             </Link>
        </div>
        
              
          </div>

    </>
  )
}

export default Prayers