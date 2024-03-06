
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom"




function NavBar() {
  return (
    
    <div className="bg-gray50 flex justify-around p-5">
      <Link
        to={"/"}
        className="inline-block rounded-full border border-[#edeef1] py-11 px-3 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white "
      >
        <h1>Cuchillo</h1>
        </Link>
        
      <nav className="pt-6">
        <NavLink
          to={"/category/Home"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Home
        </NavLink>
        <NavLink
          to={"/category/Knives"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Knives
        </NavLink>
        <NavLink
          to={"/category/Other products"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Other products
        </NavLink>
        <NavLink
          to={"/category/shop"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
         shop
        </NavLink>
        

        <NavLink to='/Gallery' className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white">Gallery</NavLink>

      </nav>
      <CartWidget />
     </div>
    
  );
}

export default NavBar;