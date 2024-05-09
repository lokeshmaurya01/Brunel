import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImCross } from "react-icons/im";
const Header = () => {
  const location = useLocation();
  const [showCross, setShowCross] = useState(false);
  const [emptyHeader, setEmptyHeader] = useState(false);
  useEffect(() => {
    setShowCross(location.pathname === "/registration");
    setEmptyHeader(location.pathname === "/success");
  }, [location]);
  return (
    <div className=" p-4 flex justify-between shadow-slate-300 shadow-md rounded-2xl h=2/12  bg-[#f3f6f3]">
      <h1 className="text-black font-bold text-5xl ml-6 p-0">Brunel </h1>
      {!emptyHeader && !showCross && (
        <div className=" mr-6 w-4/12  flex justify-evenly">
          <Link to="/registration">
            <button className="text-lg font-semibold border-2 p-4 rounded-3xl border-black hover:bg-[#efebeb] transition delay-150 duration-150 ease-in-out ">
              Get Projects
            </button>
          </Link>

          <button className="text-lg text-white bg-black font-semibold border-2 p-4 rounded-3xl hover:bg-[#3b3737] translate transform ease-in-out duration-200">
            OnBoard talents
          </button>
        </div>
      )}
      {!emptyHeader && showCross && (
        <div className=" mr-24  flex justify-evenly ">
          <Link to="/">
            <div className="align-bottom p-4 border-[grey] border-2 rounded-full hover:scale-110 hover:shadow-md hover:bg-[#f1efef] transition delay-150 ease-in-out duration-200">
              <ImCross size={28} />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
