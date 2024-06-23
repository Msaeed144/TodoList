import { useEffect, useState } from "react"
import { DateTimeInfo } from "../tools/interfaces"
import axios from "axios"


function Calender() {
  const [date, setDate] = useState<DateTimeInfo | null>(null);
  useEffect(() => {
    const calenderAPI = async () => {
      try {
        const res = await axios.get("https://api.keybit.ir/time");
        setDate(res.data);
      } catch (error) {
        console.error("Error fetching the date information", error);
      }
    };
    calenderAPI();
  }, []);
  return (
    <div>
{date ? (
  <div className=" bg-slate-100 rounded p-4 shadow-2xl mb-2">
    <div className="flex flex-row-reverse font-bold justify-center">
    <p>{date.season.name}</p>
    <p>{date.date.year.number.fa}</p>
    </div>
    <div  className="flex flex-row-reverse font-bold justify-center">
      <p>{date.date.weekday.name}</p>
      <p>{date.date.day.number.fa}</p>
      <p>{date.date.month.name}</p>
    </div>
    <div className="flex flex-row-reverse font-bold justify-center">
      <p>{date===null ? date.date.day.events.holy.text :"مناسبت خاصی نیست"}</p>
    </div>
    {/* Add other fields as necessary */}
  </div>
) : (
  <p>Loading...</p>
)}    </div>
        
  )
}

export default Calender