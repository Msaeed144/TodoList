import Job from './Job';
import styles from './todo.module.css'
import { FC, useState, ChangeEvent, useEffect } from 'react'

interface JobInt {
  job: string;
  checked: boolean;
}

const Todo: FC = () => {
  const [job, setJob] = useState('')
  const [jobArray, setJobArray] = useState<JobInt[]>([])
  const [ statusdone  , setStatusdone ] = useState<boolean>(false)
  const [ statusjob , setStatusjob ] = useState<boolean>(false)
  const [ doneJob , setDoneJob ] = useState<JobInt[]>([])
  const [ uncompletedJob , setUncompletedJob ] = useState<JobInt[]>([])
  const [ search , setSearch ] = useState<string>("")
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('todo') || '[]');
    setJobArray(items);
  }, [])
  useEffect(()=>{
    setDoneJob(jobArray.filter(item =>item.checked ===true))
    setUncompletedJob(jobArray.filter(item =>item.checked ===false))
  },[jobArray])
  const addJobHandler = () => {
    if (job.trim() !== '') {
      const jobObj = {
        job: job,
        checked: false
      }
      const array = [jobObj, ...jobArray]
      setJobArray(array)
      localStorage.setItem('todo', JSON.stringify(array))
      setJob('') // Clear the input field after adding the job
    }
  }

  const deleteJobHandler = (jobToDelete: string) => {
    const updatedArray = jobArray.filter(job => job.job !== jobToDelete)
    setJobArray(updatedArray)
    localStorage.setItem('todo', JSON.stringify(updatedArray))
  }

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setJob(event.target.value)
  }

  const checkboxHandler = (jobToUpdate: JobInt) => {
    const updatedArray = jobArray.map(job => 
      job.job === jobToUpdate.job ? { ...job, checked: !job.checked } : job
    )
    setJobArray(updatedArray)
    localStorage.setItem('todo', JSON.stringify(updatedArray))
  }
  const doneHandler = () => {
    setStatusdone(!statusdone)
    setStatusjob(false)
    console.log(statusdone)
  }
  const jobHandler = () => {
    setStatusjob(!statusjob)
    setStatusdone(false)
    console.log(statusjob)
  }
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase())
  }
  const searchedItem = jobArray.filter(job => job.job.toLowerCase().includes(search))
  const searchedDoneJob = doneJob.filter(job => job.job.toLowerCase().includes(search))
  const searchedUncompletedJob = uncompletedJob.filter(job => job.job.toLowerCase().includes(search))
  return (
    <div className="bg-slate-100 rounded p-4 shadow-2xl iranyekanbold h-full">
      <div className={`${styles.mainTitle} my-5`}>
        <h1>لیست کار هایی که باید انجام بدم</h1>
      </div>
      <form className='flex flex-row-reverse justify-center'>
      <input
        type="text"
        className='w-1/3 mx-2 rounded-xl'
        onChange={inputHandler}
        onKeyPress={(event) => {
           if (event.key === 'Enter') {
             event.preventDefault(); // جلوگیری از عملکرد پیش‌فرض فرم
             addJobHandler();
           }
         }}
        value={job}
        style={{ textAlign: "right", paddingRight: "5px" }}
        />
        <button
          onClick={addJobHandler}
          type='button'
          className='bg-emerald-400 hover:bg-emerald-300 hover:cursor-pointer p-2 rounded-xl'
        >
          <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 45.402 45.402" xmlSpace="preserve" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>
              </g>
            </g>
          </svg>
        </button>
      </form>
      <div className='flex justify-center'>
        <div className={`m-4 bg-slate-200 hover:bg-slate-300 ${statusdone && "bg-slate-300"} p-2 rounded cursor-pointer`} onClick={doneHandler}>کارهای انجام شده</div>
        <div className={`m-4 bg-slate-200 hover:bg-slate-300 ${statusjob && "bg-slate-300"} p-2 rounded cursor-pointer`} onClick={jobHandler}>کارهای انجام نشده</div>
      </div>
      <div className='flex flex-row-reverse justify-center'>
        <input onChange={searchHandler} placeholder='جستجو' style={{ textAlign: "right", paddingRight: "5px" }} className='w-1/3 mx-2 rounded-xl p-2' type="text" />
      </div>
      <div>
    
        {
          (!statusdone && !statusjob) &&
          (
            searchedItem ?
            searchedItem.map(job => <Job key={job.job} job={job} deleteJob={deleteJobHandler} checkboxHandler={checkboxHandler} />):
            jobArray.map(job => <Job key={job.job} job={job} deleteJob={deleteJobHandler} checkboxHandler={checkboxHandler} />)
          )
        }
        {
          
            statusdone &&
            (
              searchedDoneJob?
              searchedDoneJob.map(job => <Job key={job.job} job={job} deleteJob={deleteJobHandler} checkboxHandler={checkboxHandler} />):
              doneJob.map(job => <Job key={job.job} job={job} deleteJob={deleteJobHandler} checkboxHandler={checkboxHandler} />)

            )
        }
        {
          // searchedUncompletedJob
          statusjob && 
        (
          searchedUncompletedJob ?
          searchedUncompletedJob.map(job => <Job key={job.job} job={job} deleteJob={deleteJobHandler} checkboxHandler={checkboxHandler} />):
          uncompletedJob.map(job => <Job key={job.job} job={job} deleteJob={deleteJobHandler} checkboxHandler={checkboxHandler} />)
        )
          
        }
      </div>
    </div>
  )
}

export default Todo
