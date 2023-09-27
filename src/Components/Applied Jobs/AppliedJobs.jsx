import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage"
import { VscLocation } from "react-icons/vsc";
import { PiMoneyBold } from "react-icons/pi";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    

    const handleJobsFilter = filter => {
        if (filter === 'all' || filter==='') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }
    useEffect(() => {
        const storedJpbsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJpbsIds.includes(job.id))
            // console.log(jobs, storedJpbsIds, jobsApplied)
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
            
        }
    }, [jobs])
    
    return (
        <div>
            <div style={{
                background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"
            }} className="h-[25rem] relative">

                <div className="absolute right-1 top-[-7rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="297" height="185" viewBox="0 0 297 185" fill="none">
                        <g opacity="0.1">
                            <path d="M57.1585 146.477C57.1522 141.416 58.1471 136.404 60.0861 131.729C62.0251 127.053 64.87 122.806 68.4574 119.232L187.866 2.09768e-05L297 3.05176e-05L123.024 173.718C117.628 179.105 110.753 182.774 103.269 184.26C95.7852 185.746 88.0277 184.983 80.9778 182.067C73.9279 179.152 67.9021 174.214 63.6624 167.879C59.4226 161.544 57.1593 154.096 57.1585 146.477Z" fill="url(#paint0_linear_7_253)" />
                            <path d="M12.3283 91.7685C12.3244 88.598 12.9474 85.458 14.1615 82.5288C15.3756 79.5996 17.157 76.9388 19.4033 74.6993L94.1732 1.27859e-05L162.509 1.876e-05L53.5714 108.835C50.1925 112.21 45.8878 114.509 41.2014 115.44C36.5151 116.371 31.6576 115.893 27.2432 114.066C22.8288 112.24 19.0556 109.146 16.4008 105.177C13.746 101.208 12.3288 96.5421 12.3283 91.7685Z" fill="url(#paint1_linear_7_253)" />
                            <path d="M-1.81243e-05 43.2371C-0.00187957 41.7433 0.295636 40.2639 0.875532 38.8838C1.45543 37.5036 2.30626 36.25 3.3791 35.1949L39.0901 7.97038e-06L71.7283 1.08237e-05L19.6982 51.2781C18.0844 52.8683 16.0284 53.9513 13.7901 54.39C11.5519 54.8287 9.23191 54.6035 7.12352 53.7428C5.01512 52.8821 3.21302 51.4247 1.94505 49.5547C0.677075 47.6847 0.000195302 45.4862 -1.81243e-05 43.2371Z" fill="url(#paint2_linear_7_253)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_7_253" x1="297" y1="93.9231" x2="-2.18478e-05" y2="93.9231" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7E90FE" />
                                <stop offset="1" stopColor="#9873FF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7_253" x1="297" y1="93.9231" x2="-2.18478e-05" y2="93.9231" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7E90FE" />
                                <stop offset="1" stopColor="#9873FF" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7_253" x1="297" y1="93.9231" x2="-2.18478e-05" y2="93.9231" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7E90FE" />
                                <stop offset="1" stopColor="#9873FF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="absolute bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="349" height="218" viewBox="0 0 349 218" fill="none">
                        <g opacity="0.2">
                            <path d="M281.834 45.3951C281.841 51.3583 280.672 57.2643 278.394 62.7738C276.115 68.2833 272.772 73.2879 268.557 77.5002L128.242 218H0L204.436 13.295C210.777 6.94665 218.855 2.62349 227.65 0.872116C236.444 -0.879263 245.56 0.0197819 253.844 3.4556C262.128 6.89142 269.209 12.7097 274.191 20.1748C279.173 27.6399 281.833 36.4166 281.834 45.3951Z" fill="url(#paint0_linear_7_252)" />
                            <path d="M334.513 109.862C334.518 113.598 333.786 117.298 332.359 120.75C330.932 124.202 328.839 127.337 326.199 129.976L238.339 218H158.038L286.049 89.7511C290.02 85.7738 295.078 83.0653 300.585 81.9681C306.092 80.8708 311.8 81.4341 316.987 83.5866C322.174 85.7392 326.608 89.3844 329.728 94.0613C332.847 98.7383 334.513 104.237 334.513 109.862Z" fill="url(#paint1_linear_7_252)" />
                            <path d="M349 167.05C349.002 168.811 348.653 170.554 347.971 172.18C347.29 173.807 346.29 175.284 345.029 176.527L303.066 218H264.713L325.853 157.575C327.749 155.701 330.165 154.425 332.795 153.908C335.426 153.391 338.152 153.656 340.629 154.671C343.107 155.685 345.224 157.402 346.714 159.606C348.204 161.809 349 164.4 349 167.05Z" fill="url(#paint2_linear_7_252)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_7_252" x1="-8.31465e-07" y1="107.323" x2="349" y2="107.323" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7E90FE" />
                                <stop offset="1" stopColor="#9873FF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7_252" x1="-8.31465e-07" y1="107.323" x2="349" y2="107.323" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7E90FE" />
                                <stop offset="1" stopColor="#9873FF" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7_252" x1="-8.31465e-07" y1="107.323" x2="349" y2="107.323" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7E90FE" />
                                <stop offset="1" stopColor="#9873FF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="flex h-[25rem] manrope text-4xl font-bold justify-center items-center">
                    <h1>Applied Jobs</h1>
                </div>

            </div>




            <div className="w-[70%] mx-auto">
                <details className="dropdown mt-8 ">
                    <summary className="m-1 btn manrope h-16 capitalize w-48 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
                <ul className=" mt-8 mx-auto">
                    {
                        displayJobs.map(job => <div key={job.id}>
                            <div>

                                <div style={{
                                    border: "1px solid var(--Dark-06, #E8E8E8)"
                                }} className="mt-6 w-[82.5rem] h-[18.75rem] rounded-lg flex gap-4 items-center">
                                    <div style={{
                                        background: "var(--Dark-07, #F4F4F4)"
                                    }} className="w-[15rem] h-[15rem] rounded-lg flex justify-center items-center mt-[1.88rem] ml-[1.88rem]">
                                        <img src={job.logo} alt="" />

                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-[#474747] mt-8 manrope text-2xl font-semibold">{job.job_title}</h1>
                                        <h2 className="text-[#757575] manrope text-xl font-semibold mt-2">{job.company_name}</h2>

                                        <div className="mt-4 flex gap-4">
                                            <button className="btn btn-outline btn-primary rounded-md manrope text-base font-bold">{job.remote_or_onsite}</button>
                                            <button className="btn btn-outline btn-primary rounded-md manrope text-base font-bold">{job.job_type}</button>
                                        </div>
                                        <div className="flex gap-8 mt-4 items-center">
                                            <div className="flex gap-2 items-center">
                                                <VscLocation className="text-xl"></VscLocation>
                                                <p className="text-[#757575] manrope text-xl font-semibold">{job.contact_information.address}</p>

                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <PiMoneyBold className="text-xl"></PiMoneyBold>
                                                <p className="text-[#757575] manrope text-xl font-semibold">{job.salary}</p>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="mt-8 pr-4">
                                        <Link to={`/job/${job.id}`}>
                                            <a className="btn manrope h-16 w-48 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] capitalize">View Details
                                            </a>
                                            </Link>
                                    </div>

                                </div>


                            </div>
                        </div>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default AppliedJobs;