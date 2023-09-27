import { useEffect, useState } from "react";
import Categories from "./Categories";

 
const CategoryList = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategory(data))
    }, [])
    return (
        <div className="mt-32">
            <h2 className="text-2xl lg:text-5xl text-center text-black manrope font-semibold">Job Category List</h2>
            <p className="text-center text-[#757575] manrope text-base font-medium mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>


            <div className="lg:px-[10%] flex flex-col lg:flex-row justify-between items-center">
                {
                    category.map(data=><Categories key={data.id} data={data}></Categories>)
                }
            </div>
        </div>
    );
};

export default CategoryList;