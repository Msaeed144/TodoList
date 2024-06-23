import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';

interface Option {
  value: string;
  label: string;
}
interface PollutantProps {
  selectOption: SingleValue<Option>;
  setSelectOption: React.Dispatch<React.SetStateAction<SingleValue<Option>>>;

}

const options: Option[] = [
  { value: 'tehran', label: 'تهران' },
  { value: 'yazd', label: 'یزد' },
  { value: 'Isfahan', label: 'اصفهان' }
];

const Pollutant: React.FC<PollutantProps> = ({ selectOption , setSelectOption }) => {
  const [data , setData] = useState()
  const [desc , setDesc] = useState("")
  const [color , setColor] = useState("")
  const selectChangeHandler = (option: SingleValue<Option>) => {
    setSelectOption(option);
    console.log(`Option selected:`, option);
  };
useEffect(()=>{
  const fetchAPI = async () =>{
    const data = await axios.get(`https://api.waqi.info/feed/${selectOption?.value}/?token=680df8bd625a9b8dec8e91b28136090bc4fddd69`)
    setData(data.data.data.aqi)
    if(data.data.data.aqi<=50){
      setDesc("هوای خیلی تمیزه میتونی یکم پیاده روی کنی")
      setColor("green")
    }else if (50 < data.data.data.aqi && data.data.data.aqi<=100 ){
      setDesc("!شاید اونقدری که فکر می کنی هوا تمیز نیست")
      setColor("yellow")
    }else if(100 < data.data.data.aqi && data.data.data.aqi<=150){
      setDesc("هوای تمیز نیست سعی کن اگه کاری نداری بیرون نری")
      setColor("orange")
    }else if(150 < data.data.data.aqi && data.data.data.aqi<=200){
      setDesc("هوای خیلی کثیفه یه موقع بیرون نری")
      setColor("red")
    }else if(200 < data.data.data.aqi && data.data.data.aqi<=300){
      setDesc("هوای خیلی کثیفه ها اگه میتونی یه سفر برو یا اصلا از خونه خارج نشو")
      setColor("purple")
    }
  }
  fetchAPI()
},[selectOption])
  return (
    <div className="bg-slate-100 rounded p-4 shadow-2xl my-2">
      <div>
        <Select
          value={selectOption}
          options={options}
          onChange={selectChangeHandler}
          isSearchable
        />
        
      </div>
      <div>
        <div className='flex flex-row-reverse items-center'>
          <h3 className='mx-1 font-bold'>شاخص آلاینده های هوا</h3>
          <p style={{color:`${color}`,fontSize:"1.5rem" , fontWeight:'bold'}}>{data}</p>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Pollutant;
