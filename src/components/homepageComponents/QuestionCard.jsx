import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const QuestionCard = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/*Header*/}
      <div className=" my-4 bg-[#f3f6f3] shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-xl">{data.question}</span>
          <span>
            {showItems ? (
              <FaMinus className="transition transform ease-linear duration-1000" />
            ) : (
              <FaPlus className="transition-max-height duration-500 " />
            )}
          </span>
        </div>

        {showItems && (
          <p className="transition-transform ease-in-out duration-500">
            {data.answer}
          </p>
        )}
      </div>
      {/*Accordian Body*/}
    </div>
  );
};

export default QuestionCard;
