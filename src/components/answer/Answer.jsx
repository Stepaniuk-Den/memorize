import "./answer.scss";
import PropTypes from "prop-types";

const Answer = ({ option, handleClickAnswer, toggleIsActive }) => {
  const handleClick = () => {
    toggleIsActive();
    handleClickAnswer(option.isCorrect);
  };
  return (
    <li className="answer" onClick={handleClick}>
      {option.answer}
    </li>
  );
};

Answer.propTypes = {
  toggleIsActive: PropTypes.func,
  option: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }),
  handleClickAnswer: PropTypes.func.isRequired,
};
export default Answer;
