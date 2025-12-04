import { useEffect, useState } from "react"
import Prayer from "../../component/Prayer/Prayer"
import styles from "./styles.module.css";

const {container,top_sec,date} = styles;
const Home = () => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [dayDate, SetdatDate] = useState("");
  const [city, setCity] = useState("Cairo");
  
  const getCurrentFormattedDate = () => {
    const today = new Date();
    return `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;             
  };
  
  const [selectedDate] = useState(getCurrentFormattedDate());

  const cities = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الاسكندرية", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "أسوان", value: "Aswan" },
    { name: "الأقصر", value: "Luxor" },    
  ]

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const res = await fetch(`https://api.aladhan.com/v1/timingsByCity/
          ${selectedDate}?city=${city}&country=EG`);
        const dataPrayer = await res.json();
        setPrayerTimes(dataPrayer.data.timings);
        SetdatDate(dataPrayer.data.date.gregorian.date);

      } catch (error) {
        console.error(error)
      }
    }

    fetchPrayerTimes()
  }, [city, selectedDate])
  
  const formatTimes = (time) => {
    if (!time) {
      return "00:00";
    }

    let [hours, minutes] = time.split(":").map(Number)
    const pred = hours >= 12 ? "م" : "ص";
    hours = hours % 12 || 12;
    return `${hours}:${minutes<10?"0"+minutes:minutes} ${pred}`;
  }

  return (
    <section>
      <div className={container}>
        
        <div className={top_sec}>
          <div >
            <h3>المدينة</h3>
            <select onChange={e=>{setCity(e.target.value)}}>

              {cities.map((el) => {
             return <option key={el.value} value={el.value}>{el.name}</option>
              })}
            </select>
          </div>
          <div className={date}>
            <h3>التاريخ</h3>
            <h4>{dayDate}</h4>
          </div>
        </div>
        <Prayer name="الفجر:" to="prayers/fajr" time={formatTimes(prayerTimes.Fajr)} />
        <Prayer name="الظهر:" to="prayers/dauhur" time={formatTimes(prayerTimes.Dhuhr)}/>
        <Prayer name="العصر:" to="prayers/asr" time={formatTimes(prayerTimes.Asr)}/>
        <Prayer name="المغرب:" to="prayers/maghrib" time={formatTimes(prayerTimes.Maghrib)}/>
        <Prayer name="العشاء:" to="prayers/isha" time={formatTimes(prayerTimes.Isha)}/>
      </div>
    </section>
  )
}

export default Home