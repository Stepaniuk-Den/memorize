import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import "./resultQuiz.scss";
import {
  selectedCurrentAnswers,
  selectedPassed,
  selectedWrongPassed,
} from "../../redux/selectors";
import { setPassedQuizzes, setWrongPassedQuizzes } from "../../redux/quizSlice";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const ResultQuiz = () => {
  const useCurrentAnswers = useSelector(selectedCurrentAnswers);
  const useWrongPassed = useSelector(selectedWrongPassed);
  const usePassed = useSelector(selectedPassed);
  const [allAnswer, setAllAnswer] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      useCurrentAnswers?.length ===
      useWrongPassed?.length + usePassed?.length
    )
      return;
    const arr = [...useCurrentAnswers];
    arr.sort((a, b) => a.id - b.id);
    setAllAnswer(arr);
    arr.forEach((item) =>
      item.isCorrect
        ? dispatch(setPassedQuizzes(item))
        : dispatch(setWrongPassedQuizzes(item))
    );
  }, [useCurrentAnswers, dispatch, useWrongPassed, usePassed]);
  console.log(usePassed);
  console.log(useWrongPassed);
  const ratingNum = (usePassed?.length / useCurrentAnswers?.length).toFixed(2);
  console.log(ratingNum);
  console.log(allAnswer);

  return (
    <div className="resultQuiz">
      <h2>Congratulations !!</h2>
      <div className="resultQUiz__data">
        <div className="resultQUiz__data--rating">
          <p>Correct Answer - {usePassed?.length}</p>
          <p>Total Answer - {useCurrentAnswers?.length}</p>
        </div>
        <div className="resultQUiz__data--answers">
          {allAnswer.map((item) => (
            <p key={nanoid()} className={item.isCorrect ? "true" : "false"}>
              <span>Question №{item.id}</span>
              {item.isCorrect ? <ImCheckmark /> : <ImCross />}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultQuiz;
