import "./answersList.scss";
import PropTypes from "prop-types";
import Answer from "../answer/Answer";
import { useDispatch } from "react-redux";
import { addCurrentAnswers, filterCurrentQuizzes } from "../../redux/quizSlice";
import { nanoid } from "nanoid";

const AnswersList = ({ id, options, toggleIsActive }) => {
  const dispatch = useDispatch();

  const handleClickAnswer = (isCorrect) => {
    dispatch(addCurrentAnswers({ id, isCorrect }));
    dispatch(filterCurrentQuizzes(id));
  };

  return (
    <ul className="answersList">
      {options.map((option) => (
        <Answer
          key={nanoid()}
          option={option}
          handleClickAnswer={handleClickAnswer}
          toggleIsActive={toggleIsActive}
        />
      ))}
    </ul>
  );
};

AnswersList.propTypes = {
  id: PropTypes.number.isRequired,
  toggleIsActive: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default AnswersList;
