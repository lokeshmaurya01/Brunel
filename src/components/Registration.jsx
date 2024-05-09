import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiWarningOctagonBold } from "react-icons/pi";
const Registration = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!nameRef.current.value || !emailRef.current.value);
  }, []);

  const handleInputChange = () => {
    setIsButtonDisabled(!nameRef.current.value || !emailRef.current.value);

    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    // Email validation using REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValidEmail(false);
      return;
    } else {
      setIsValidEmail(true);
    }
    if (!name || !email || !isValidEmail) {
      return;
    }
    navigate("/success", { replace: true });
    //submit logic here
    console.log("Form submitted successfully!");
  };
  return (
    <div className="">
      <div className="w-3/5 mx-auto mt-10 p-16 rounded-3xl bg-[#f1efef]">
        <div className="my-15 w-4/5 mx-auto text-5xl font-bold text-center text leading-tight">
          Start your success Journey here with Us !!
        </div>
        <form onSubmit={handleSubmit} className=" w-4/5 mx-auto mt-15 ">
          <input
            ref={nameRef}
            className="block mx-auto my-6 p-3 w-3/5 border-[#c9c3c3] border-2 rounded-3xl text-xl"
            type="text"
            placeholder="Enter Your Name"
            onChange={handleInputChange}
          />
          <input
            ref={emailRef}
            className="block mx-auto mt-6 mb-2 p-3 w-3/5 border-[#bbb7b7] border-2 rounded-3xl text-xl"
            type="text"
            placeholder="Enter Your Email"
            onChange={handleInputChange}
          />
          {
            <span
              className={`text-red-600 ${
                isValidEmail ? "invisible" : "visible"
              } block w-3/5 mx-auto text-lg font-semibold mb-2 flex justify-center items-center`}
            >
              <PiWarningOctagonBold /> <p>Invalid email address</p>
            </span>
          }
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`${
              isButtonDisabled
                ? "opacity-20 cursor-not-allowed"
                : "hover:bg-[#3b3737] "
            } opacity-75 w-3/5 text-2xl my-3 text-white bg-black font-semibold border-2 p-3 rounded-3xl translate transform ease-in-out duration-200 mx-auto block`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
