import Asr from "../../assets/asr.png";
import Dauhur from "../../assets/dhuhr.png";
import Fajr from "../../assets/fajr.png";
import Isha from "../../assets/isha.png";
import Maghrib from "../../assets/maghrib.png";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css"

const {fullpage,pic} = styles;
const Prayers = () => {

  return (
    <>
      <div className={fullpage}>
        <div className={pic}>
          <Link to={"fajr"} style={{ textDecoration: "none", color: "black" }}>
            <img src={Fajr} title="الفجر" />
            <h2>الفجر</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link
            to={"dauhur"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={Dauhur} title="الظهر" />
            <h2>الظهر</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link to={"asr"} style={{ textDecoration: "none", color: "black" }}>
            <img src={Asr} title="العصر" />
            <h2>العصر</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link
            to={"maghrib"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={Maghrib} title="المغرب" />
            <h2>المغرب</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link to={"isha"} style={{ textDecoration: "none", color: "black" }}>
            <img src={Isha} title="العشاء" />
            <h2>العشاء</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Prayers