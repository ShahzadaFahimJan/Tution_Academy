import { Link } from "react-router-dom";
const Header = ()=> {
    return (
        <>
 <div className="w-full h-[86px] bg-[#D1D4D6] flex items-center justify-between font-bold text-2xl px-4">
 
  <div>
    Logo
  </div>
  <div className="flex gap-11 justify-end">
  <div>
    <Link to="/aboutus">About Us</Link>
    </div>
    <div className="mr-[130px]">
    <Link to="/programs">Programs</Link>
    </div>
    <div className="">

    <Link to="/apply">Apply Now</Link>
    </div>
    </div>
    </div>
 </>
    )
}

export default Header;