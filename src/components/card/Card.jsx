import { useState } from "react";
import PropTypes from "prop-types";
import AnswersList from "../answersList/AnswersList";
import "./card.scss";

const Card = ({ quiz }) => {
  const [isActive, setIsActive] = useState(false);
  const { id, question, options } = quiz;
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  return (
    <li className="card" id={id}>
      <div className="quiz" onClick={toggleIsActive}>
        {question}
      </div>
      <div className={isActive ? "answers-active" : "answers"}>
        <AnswersList options={options} />
      </div>
    </li>
  );
};

Card.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        answer: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }),
};

export default Card;
