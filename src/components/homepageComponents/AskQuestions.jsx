import Questions from "./Questions";
const AskQuestions = () => {
  return (
    <div className="h-[80vh] bg-[#d6dad6] m-10 rounded-[3em] flex justify-around ">
      <div className="w-1/3 mt-15 ">
        <p className="font-bold text-5xl mt-20 text-center">Ask Questions</p>
      </div>
      <div className="w-3/5">
        <Questions />
      </div>
    </div>
  );
};

export default AskQuestions;
