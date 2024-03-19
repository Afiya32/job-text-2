import logo from "../../assets/Logo/logo.png"

const NavBar = () => {
    return (
     <div className="w-full bg-transparent  ">
           <div className="navbar w-10/12 mx-auto bg-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <img src={logo} alt="" />
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>Blog</li>
      <li>
       Offer
      </li>
      <li>Airlines</li>
      <li>About</li>
      </ul>
    </div>
    <div className="flex items-center justify-center gap-1">
    <img src={logo} alt="" className="w-10 h-10" />
    <h1 className="font-semibold text-3xl"><span className="text-orange-500">Air</span><span className="text-blue-600">Book</span></h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-center items-center gap-10 font-bold  px-1">
      <li>Blog</li>
      <li>
       Offer
      </li>
      <li>Airlines</li>
      <li>About</li>
    </ul>
  </div>
  <div className="navbar-end">
   <button className="btn bg-blue-500 text-white">Sign in</button>
  </div>
</div>
     </div>
    );
};

export default NavBar;