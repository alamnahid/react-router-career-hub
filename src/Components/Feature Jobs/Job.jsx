/* eslint-disable react/prop-types */
import { VscLocation } from "react-icons/vsc";
import { PiMoneyBold } from "react-icons/pi";
import { Link } from "react-router-dom";



const Job = ({job}) => {
    const {logo, id, job_title, company_name, remote_or_onsite,location, job_type, salary} = job;
    return (
        <div>
            <div style={{
                border: "1px solid var(--Dark-06, #E8E8E8)"

            }} className="lg:w-[40.5rem] h-[24.5rem] rounded-lg pl-8">

            <img className="pt-8" src={logo} alt="" />
            <h1 className="text-[#474747] mt-8 manrope text-2xl font-semibold">{job_title}</h1>
            <h2 className="text-[#757575] manrope text-xl font-semibold mt-2">{company_name}</h2>

            <div className="mt-4 flex gap-4">
                <button className="btn btn-outline btn-primary rounded-md manrope text-base font-bold">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-primary rounded-md manrope text-base font-bold">{job_type}</button>
            </div>
            <div className="flex gap-8 mt-4 items-center">
                <div className="flex gap-2 items-center">
                    <VscLocation className="text-xl"></VscLocation>
                    <p className="text-[#757575] manrope text-xl font-semibold">{location}</p>

                </div>
                <div className="flex gap-2 items-center">
                    <PiMoneyBold className="text-xl"></PiMoneyBold>
                    <p className="text-[#757575] manrope text-xl font-semibold">{salary}</p>

                </div>
            </div>

            <div className="mt-8">
                <Link to={`/job/${id}`}>
                <a className="btn manrope lg:h-16 lg:w-48 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] capitalize">View Details
                 </a></Link>
             </div>

            </div>
            
        </div>
    );
};

export default Job;