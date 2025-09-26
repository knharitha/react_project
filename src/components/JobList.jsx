import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import JobCard from './JobCard'
import jobs from '../data/jobs'
const JobList = () => {
    const[search,setSearch]=useState('')
    const[filterType,setFiltertype]=useState('')
    const[filterLocation,setFilterLocation]=useState('')
    const[currentPage,setCurrentPage]=useState(1)
    const jobsPerPage=4;
    const filteredJobs=jobs.filter((job)=>{
        const matchSearch=
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
        const matchType=filterType? job.type===filterType:true;
        const matchLocation = filterLocation? job.location === filterLocation :true
        return matchSearch && matchType && matchLocation
    })
    const indexofLast=currentPage*jobsPerPage;
    const indexofFirst=indexofLast -jobsPerPage;
    const currentJobs=filteredJobs.slice(indexofFirst,indexofLast)
    const totalPages=Math.ceil(filteredJobs.length/jobsPerPage)
    console.log("JobList mounted")
console.log("Jobs:", jobs)
console.log("CurrentJobs:", currentJobs)

  return (
    <div style={{padding:"10px"}}>
        <h3>JobList</h3>
        <SearchBar
        search={search}
        setSearch={setSearch}
        filterType={filterType}
        setFiltertype={setFiltertype}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
        ></SearchBar>
        {currentJobs.length>0 ?(
            currentJobs.map((job)=><JobCard key={job.id} job={job}/>)
        ):(<p>No jobs found.</p>)}
        {totalPages>1 &&(
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
        )}
    </div>
  )
}

export default JobList