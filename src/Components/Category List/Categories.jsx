

const Categories = ({data}) => {
    const {logo, category_name, availability} = data;
    return (
        <div className="mt-8 ">
            <div style={{
                background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"
            }} className="w-[19.4rem] h-[15.1rem] rounded-lg pl-10 pt-10">

                <img src={logo} />
                <h1 className="text-[#474747] manrope text-xl font-semibold mt-8">{category_name}</h1>

                <h2 className="text-[#A3A3A3] manrope text-base font-medium mt-2">{availability}</h2>   
                
            </div>
            
        </div>
    );
};

export default Categories;