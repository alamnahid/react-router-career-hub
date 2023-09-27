import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
    <li className="manrope text-base font-semibold"><NavLink to="/">Home</NavLink></li>
    <li className="manrope text-base font-semibold"><NavLink to="/applied">Applied Jobs</NavLink></li>
    <li className="manrope text-base font-semibold"><NavLink to="/statistics">Statistics</NavLink></li>
    <li className="manrope text-base font-semibold"><NavLink to="/blogs">Blogs</NavLink></li>
    
    </>
    return (
        <div style={{
          background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)"
      }} className="pt-8 lg:px-[10%] rounded-lg">
            <div className="navbar bg-base-100">
  <div  className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="manrope font-bold lg:text-4xl normal-case ">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/'}><a className="btn manrope lg:h-16 capitalize lg:w-48 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Start Applying
</a></Link>
  </div>
</div>
        </div>
    );
};

export default Header;