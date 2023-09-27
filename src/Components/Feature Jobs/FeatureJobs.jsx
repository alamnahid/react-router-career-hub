import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";


const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(()=>{
        fetch("jobs.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    }, [])
    return (
        <div>
            <div className="mt-32">
            <h2 className=" text-center text-black manrope text-5xl font-semibold">Featured Jobs</h2>
            <p className="text-center text-[#757575] manrope text-base font-medium mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className="grid lg:grid-cols-2 lg:px-[10%] justify-items-center items-center mt-8 gap-6">
                {
                    jobs.slice(0, dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
                </div>
            </div>
            <div className="text-center mt-10">
            <div className={dataLength===jobs.length?"hidden":""}>
                
                <a onClick={()=>setDataLength(jobs.length)} className="btn manrope h-16 lg:w-48 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] capitalize">View Details
                 </a>
            </div>
            </div>
            
        </div>
    );
};

export default FeatureJobs;