
import './App.css'
import Calender from './components/Calender'
import Pollutant from './components/Pollutant'
import Todo from './components/Todo'
import Weather from './components/Weather'
import  { SingleValue } from 'react-select';
import { useState } from 'react'
export interface Option {
  value: string;
  label: string;
}

function App() {
  const [selectOption, setSelectOption] = useState<SingleValue<Option>>({ value: 'tehran', label: 'تهران' });
  return (
    <div className='grid grid-cols-4 gap-x-4 h-full p-3' >
      <div>
        <Calender />
        <Pollutant selectOption={selectOption} setSelectOption={setSelectOption}/>
        <Weather selectOption={selectOption}/>
      </div>
      <div className={`col-span-3 h-full`}>
        <Todo />
      </div>
    </div>
  )
}

export default App
