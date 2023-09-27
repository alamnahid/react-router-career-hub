import { useLoaderData, useParams } from "react-router-dom";
import { PiMoneyBold, PiAddressBook, PiBriefcaseMetalDuotone, PiVoicemailDuotone, PiPhoneCallDuotone } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idint = parseInt(id);

    const job = jobs.find((job)=>job.id===idint)
    const {job_title, salary, job_description, job_responsibility, educational_requirements, experiences } = job;

    const handleApplyJobs = ()=>{
        saveJobApplication(idint)
        toast("Application Successfully");
    }
    return (
        <div>
            <div style={{
          background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"
      }} className="h-[25rem] relative">

        <div className="absolute right-1 top-[-7rem]">
        <svg xmlns="http://www.w3.org/2000/svg" width="297" height="185" viewBox="0 0 297 185" fill="none">
  <g opacity="0.1">
    <path d="M57.1585 146.477C57.1522 141.416 58.1471 136.404 60.0861 131.729C62.0251 127.053 64.87 122.806 68.4574 119.232L187.866 2.09768e-05L297 3.05176e-05L123.024 173.718C117.628 179.105 110.753 182.774 103.269 184.26C95.7852 185.746 88.0277 184.983 80.9778 182.067C73.9279 179.152 67.9021 174.214 63.6624 167.879C59.4226 161.544 57.1593 154.096 57.1585 146.477Z" fill="url(#paint0_linear_7_253)"/>
    <path d="M12.3283 91.7685C12.3244 88.598 12.9474 85.458 14.1615 82.5288C15.3756 79.5996 17.157 76.9388 19.4033 74.6993L94.1732 1.27859e-05L162.509 1.876e-05L53.5714 108.835C50.1925 112.21 45.8878 114.509 41.2014 115.44C36.5151 116.371 31.6576 115.893 27.2432 114.066C22.8288 112.24 19.0556 109.146 16.4008 105.177C13.746 101.208 12.3288 96.5421 12.3283 91.7685Z" fill="url(#paint1_linear_7_253)"/>
    <path d="M-1.81243e-05 43.2371C-0.00187957 41.7433 0.295636 40.2639 0.875532 38.8838C1.45543 37.5036 2.30626 36.25 3.3791 35.1949L39.0901 7.97038e-06L71.7283 1.08237e-05L19.6982 51.2781C18.0844 52.8683 16.0284 53.9513 13.7901 54.39C11.5519 54.8287 9.23191 54.6035 7.12352 53.7428C5.01512 52.8821 3.21302 51.4247 1.94505 49.5547C0.677075 47.6847 0.000195302 45.4862 -1.81243e-05 43.2371Z" fill="url(#paint2_linear_7_253)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_7_253" x1="297" y1="93.9231" x2="-2.18478e-05" y2="93.9231" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7E90FE"/>
      <stop offset="1" stop-color="#9873FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_7_253" x1="297" y1="93.9231" x2="-2.18478e-05" y2="93.9231" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7E90FE"/>
      <stop offset="1" stop-color="#9873FF"/>
    </linearGradient>
    <linearGradient id="paint2_linear_7_253" x1="297" y1="93.9231" x2="-2.18478e-05" y2="93.9231" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7E90FE"/>
      <stop offset="1" stop-color="#9873FF"/>
    </linearGradient>
  </defs>
        </svg>
        </div>

        <div className="absolute bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="349" height="218" viewBox="0 0 349 218" fill="none">
  <g opacity="0.2">
    <path d="M281.834 45.3951C281.841 51.3583 280.672 57.2643 278.394 62.7738C276.115 68.2833 272.772 73.2879 268.557 77.5002L128.242 218H0L204.436 13.295C210.777 6.94665 218.855 2.62349 227.65 0.872116C236.444 -0.879263 245.56 0.0197819 253.844 3.4556C262.128 6.89142 269.209 12.7097 274.191 20.1748C279.173 27.6399 281.833 36.4166 281.834 45.3951Z" fill="url(#paint0_linear_7_252)"/>
    <path d="M334.513 109.862C334.518 113.598 333.786 117.298 332.359 120.75C330.932 124.202 328.839 127.337 326.199 129.976L238.339 218H158.038L286.049 89.7511C290.02 85.7738 295.078 83.0653 300.585 81.9681C306.092 80.8708 311.8 81.4341 316.987 83.5866C322.174 85.7392 326.608 89.3844 329.728 94.0613C332.847 98.7383 334.513 104.237 334.513 109.862Z" fill="url(#paint1_linear_7_252)"/>
    <path d="M349 167.05C349.002 168.811 348.653 170.554 347.971 172.18C347.29 173.807 346.29 175.284 345.029 176.527L303.066 218H264.713L325.853 157.575C327.749 155.701 330.165 154.425 332.795 153.908C335.426 153.391 338.152 153.656 340.629 154.671C343.107 155.685 345.224 157.402 346.714 159.606C348.204 161.809 349 164.4 349 167.05Z" fill="url(#paint2_linear_7_252)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_7_252" x1="-8.31465e-07" y1="107.323" x2="349" y2="107.323" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7E90FE"/>
      <stop offset="1" stop-color="#9873FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_7_252" x1="-8.31465e-07" y1="107.323" x2="349" y2="107.323" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7E90FE"/>
      <stop offset="1" stop-color="#9873FF"/>
    </linearGradient>
    <linearGradient id="paint2_linear_7_252" x1="-8.31465e-07" y1="107.323" x2="349" y2="107.323" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7E90FE"/>
      <stop offset="1" stop-color="#9873FF"/>
    </linearGradient>
  </defs>
        </svg>
        </div>

        <div className="flex h-[25rem] manrope text-4xl font-bold justify-center items-center">
            <h1>Job Details</h1>
        </div>

            </div>

            <div className="lg:w-[70%] mx-auto mt-8 lg:mt-32 flex flex-col lg:flex-row justify-between items-center">
                <div className="w-[90%] lg:w-[60%]">
                    <p className="text-[#757575] manrope text-base font-semibold">
                    <span className="text-[#1A1919]">Job Description:</span> {job_description}
                    </p>
                    <p className="text-[#757575] manrope text-base font-semibold mt-6">
                    <span className="text-[#1A1919]">Job Responsibility:</span> {job_responsibility}
                    </p>
                    <p className="text-[#757575] manrope text-base font-semibold mt-6">
                    <span className="text-[#1A1919]">Educational Requirements:</span> <br /> <br /> {educational_requirements}
                    </p>
                    <p className="text-[#757575] manrope text-base font-semibold mt-6">
                    <span className="text-[#1A1919]">Experience:</span> <br /> <br /> {experiences}
                    </p>
                </div>

                <div>
                <div style={{
                    background: "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)"
                }} className=" pl-[1.88rem] pt-[1.88rem] lg:w-[26.5rem] h-[28.8rem] rounded-lg">
                    <p className="text-black manrope text-xl font-bold">Job Details</p>
                    <div className="pr-[1.88rem] mt-6">
                        <hr />

                        <div className="flex items-center gap-2 text-xl mt-6">
                            <PiMoneyBold></PiMoneyBold>
                            <p className="text-[#474747] manrope text-xl font-semibold">Salary: <span className="text-[#757575]">{salary}</span></p>
                        </div>

                        <div className="flex items-center gap-2 text-xl mt-4">
                            <PiBriefcaseMetalDuotone></PiBriefcaseMetalDuotone>
                            <p className="text-[#474747] manrope text-xl font-semibold">Job Title: <span className="text-[#757575]">{job_title}</span></p>
                        </div>
                    </div>

                    <p className="text-black manrope text-xl font-bold mt-8">Contact Information</p>
                    <div className="pr-[1.88rem] mt-6">
                        <hr />

                        <div className="flex items-center gap-2 text-xl mt-6">
                            <PiPhoneCallDuotone></PiPhoneCallDuotone>
                            <p className="text-[#474747] manrope text-xl font-semibold">Phone: <span className="text-[#757575]">{job.contact_information.phone}</span></p>
                        </div>

                        <div className="flex items-center gap-2 text-xl mt-4">
                            <PiVoicemailDuotone></PiVoicemailDuotone>
                            <p className="text-[#474747] manrope text-xl font-semibold">Email: <span className="text-[#757575]">{job.contact_information.email}</span></p>
                        </div>
                        <div className="flex items-center gap-2 text-xl mt-4">
                            <PiAddressBook></PiAddressBook>
                            <p className="text-[#474747] manrope text-xl font-semibold">Address: <span className="text-[#757575]">{job.contact_information.address}</span></p>
                        </div>
                    </div>

                </div>

                <div onClick={handleApplyJobs} className="lg:w-[26.5rem] mt-6 h-[4.8rem] rounded-lg">
                <a className="btn w-full lg:w-[26.5rem] h-[4.8rem] manrope capitalize text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now
</a>
                </div>
                </div>
            </div>
            <ToastContainer />
            
        </div>
    );
};

export default JobDetails;