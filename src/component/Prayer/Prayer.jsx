import { Link } from "react-router-dom";
import styles from "./styles.module.css"

const { prayer,prayer_name,prayer_time} = styles; 

const Prayer = ({name,time,to}) => {
  return (
    <div className={prayer} >
      <Link to={`${to}`} style={{textDecoration:"none",color:"white", display:"flex",alignItems:"center",width:"50%",justifyContent:"center"}} >
      <p className={prayer_name}>{name}</p>
      
      </Link>

      <p className={prayer_time}>{time}</p>     
    </div>
  )
}

export default Prayer