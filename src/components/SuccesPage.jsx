import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { RiLoader2Line } from "react-icons/ri";

const SuccessPage = () => {
  const [redirectTimer, setRedirectTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirectTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 h-screen">
      <FaCircleCheck
        color="green"
        size={40}
        className="animate-bounce animate-pulse"
      />
      <h1 className="text-5xl font-bold mb-4 ">Congratulations!</h1>
      <p className="w-1/2 text-2xl font-light font-mono text-center mb-4">
        Your request has been successfully submitted to us.
        <br />
        We will validate you information and reach out to you shortly with
        updates
      </p>
      <p className="text-xl mt-6 mb-2 font-semibold">
        You will be redirected to the homepage in{" "}
        <span className=" text-[green] font-bold animate-pulse">
          {redirectTimer}
        </span>{" "}
        seconds.
      </p>
      <RiLoader2Line size={30} className="animate-spin my-2" />
      <p className="text-sm font-semibold ">
        If not redirected,{" "}
        <button
          className="text-blue-500 underline"
          onClick={() => navigate("/")}
        >
          click here
        </button>
        .
      </p>
    </div>
  );
};

export default SuccessPage;
