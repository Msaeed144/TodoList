import { useEffect, useState } from "react";
import { Option } from "../App";
import { SingleValue } from 'react-select';
import axios from "axios";
import { WeatherData } from "../tools/interfaces";

interface WeatherProps {
  selectOption: SingleValue<Option>;
}

const Weather: React.FC<WeatherProps> = ({ selectOption }) => {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const weatherAPI = async () => {
      if (selectOption?.value) {
        try {
          const key = "50dde2349537175fc9d8b0df2ba3e255";
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${selectOption.value}&appid=${key}`);
          setData(res.data);
        } catch (error) {
          console.error("Error fetching the date information", error);
        }
      }
    };

    weatherAPI();
  }, [selectOption]);

  return (
    <div className="bg-slate-100 rounded p-4 shadow-2xl">
      <div>
        <p className="text-center font-bold" style={{fontSize:"1.3rem"}}>
           وضعیت جوی فعلی شهر {selectOption?.label}</p>
      </div>
      <div className="flex items-center justify-between flex-row-reverse">
        <div>
          {data && (
            <div className="flex flex-row-reverse font-bold">
              <p className="mx-2">دمای هوا</p>
              <p> {(data.main.temp - 273.15).toFixed(2)}°C</p>
            </div>
          )}
        </div>
        <div>
          {data && (
            <img className="shadow-2xl" style={{backgroundColor:"transparent" , width:"80px"}} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].description} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
