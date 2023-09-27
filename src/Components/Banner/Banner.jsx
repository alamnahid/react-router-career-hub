import user from "../../assets/images/user.png"

const Banner = () => {
    return (
        <div style={{
            background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"
        }}  className="lg:px-[10%] flex flex-col-reverse lg:flex-row justify-between items-center pt-12 gap-8">
            <div>
                <h1 className="lg:w-[35rem] text-black manrope text-2xl lg:text-[5rem] font-semibold leading-[6rem]">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>

                <p className="lg:w-[32rem] text-[#757575] manrope text-sm lg:text-lg font-medium mt-6">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>

                <div className="mt-8">
    <a className="btn manrope lg:h-16 lg:w-48 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] capitalize">Get Started
</a>
  </div>
                
            </div>

            <div>
                <img src={user} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;