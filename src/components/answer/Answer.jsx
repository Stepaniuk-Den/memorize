import "./answer.scss";
import PropTypes from "prop-types";

const Answer = ({ option, handleClickAnswer }) => {
  return (
    <li className="answer" onClick={() => handleClickAnswer(option.isCorrect)}>
      {option.answer}
    </li>
  );
};

Answer.propTypes = {
  option: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }),
  handleClickAnswer: PropTypes.func.isRequired,
};
export default Answer;
