import { FaArrowRight } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const CarouselFrame = ({ data }) => {
  return (
    <div className="h-full w-full object-cover">
      <div className="h-full w-full flex">
        <div className="h-full w-1/2 flex flex-col justify-evenly items-center">
          {" "}
          <div>
            <img
              src={data.img}
              className=" mx-auto w-4/5 rounded-xl shadow-md  border-2"
              alt=""
            />
            <div className="w-52 bg-white rounded-2xl absolute z-10 top-24 font-semibold start-5 p-4 flex justify-evenly items-center">
              <FaRocket color="green" size={30} />
              <div>
                <p className="text-2xl text-center ">10 Days</p>{" "}
                <p className="text-base text-center">Staff Deployment!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-evenly items-center">
          <div className="w-2/3 font-medium text-5xl text-center">
            {data.story}
          </div>
          <button className=" flex justify-around items-center w-2/6 text-2xl text-white bg-black font-semibold border-2 p-4 rounded-3xl hover:bg-[#3b3737] translate transform ease-in-out duration-200">
            {"Explore More"} <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselFrame;
