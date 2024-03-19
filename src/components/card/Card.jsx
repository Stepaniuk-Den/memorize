import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AnswersList from "../answersList/AnswersList";
import "./card.scss";

const Card = ({ quiz }) => {
  const [isActive, setIsActive] = useState(false);

  const answersRef = useRef(null);

  const { id, question, options } = quiz;

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        isActive &&
        answersRef.current &&
        !answersRef.current.contains(e.target)
      ) {
        setIsActive(false);
        let card = document.getElementById(id);
        card.classList.toggle("is-flipped");
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isActive, id]);

  const toggleIsActive = () => {
    setIsActive(!isActive);
    let card = document.getElementById(id);
    card.classList.toggle("is-flipped");
  };

  return (
    <li className="scene">
      <div className="card" id={id} ref={answersRef}>
        <div className="card__face card__face--front" onClick={toggleIsActive}>
          {question}
        </div>
        <div className="card__face card__face--back">
          <AnswersList
            id={id}
            options={options}
            toggleIsActive={toggleIsActive}
          />
        </div>
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
