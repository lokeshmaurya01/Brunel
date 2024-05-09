import { useState } from "react";
import { questions } from "../../utils/constants";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <div>
      {questions.map((faq, index) => (
        <QuestionCard
          key={index}
          data={faq}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Questions;
