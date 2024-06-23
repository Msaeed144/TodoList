
function Job({ job, deleteJob, checkboxHandler }) {
  return (
    <div className={`flex flex-row-reverse justify-between items-center mt-3 w-1/2 text-center mx-auto bg-slate-200 rounded-xl p-2 ${job.checked && "bg-slate-300"}`}>
      <div className="flex">
        <p>{job.job}</p>
        <input
          onChange={() => checkboxHandler(job)}
          className="ms-2"
          type="checkbox"
          checked={job.checked}
        />
      </div>
      <div onClick={() => deleteJob(job.job)} className='bg-emerald-400 hover:bg-emerald-300 hover:cursor-pointer p-1 rounded'>
        <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M10 11V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M14 11V17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4 7H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Job
