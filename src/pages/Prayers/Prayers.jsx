import Asr from "../../assets/asr.png";
import Dauhur from "../../assets/dhuhr.png";
import Fajr from "../../assets/fajr.png";
import Isha from "../../assets/isha.png";
import Maghrib from "../../assets/maghrib.png";
import Asr2 from "../../assets/asr.jpg";
import Dauhur2 from "../../assets/dhuhr.jpg";
import Fajr2 from "../../assets/fajr.jpg";
import Isha2 from "../../assets/isha.jpg";
import Maghrib2 from "../../assets/maghrib.jpg";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css"

const {fullpage,pic} = styles;
const Prayers = () => {

  return (
    <>
      <div className={fullpage}>
        <div className={pic}>
          <Link to={"fajr"} style={{ textDecoration: "none", color: "black" }}>
            <img src={Fajr} src2={Fajr2} title="الفجر" />
            <h2>الفجر</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link
            to={"dauhur"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={Dauhur} src2={Dauhur2} title="الظهر" />
            <h2>الظهر</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link to={"asr"} style={{ textDecoration: "none", color: "black" }}>
            <img src={Asr} src2={Asr2} title="العصر" />
            <h2>العصر</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link
            to={"maghrib"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={Maghrib} src2={Maghrib2} title="المغرب" />
            <h2>المغرب</h2>
          </Link>
        </div>
        <div className={pic}>
          <Link to={"isha"} style={{ textDecoration: "none", color: "black" }}>
            <img src={Isha} src2={Isha2} title="العشاء" />
            <h2>العشاء</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Prayers