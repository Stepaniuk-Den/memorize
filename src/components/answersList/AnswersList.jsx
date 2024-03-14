import "./answersList.scss";
import PropTypes from "prop-types";
import Answer from "../answer/Answer";

const AnswersList = ({ options }) => {
  const handleClickAnswer = (isCorrect) => {
    console.log(isCorrect);
  };

  return (
    <ul className="answersList">
      {options.map((option) => (
        <Answer
          key={option.answer}
          option={option}
          handleClickAnswer={handleClickAnswer}
        />
      ))}
    </ul>
  );
};

AnswersList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default AnswersList;
