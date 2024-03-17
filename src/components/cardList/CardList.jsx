import Card from "../card/Card";
import "./cardList.scss";
import { acid } from "../../data/chemistry";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuizzes } from "../../redux/quizSlice";
import { selectedCurrent } from "../../redux/selectors";
import { useEffect } from "react";

const CardList = () => {
  const dispatch = useDispatch();
  const useCurrent = useSelector(selectedCurrent);
  useEffect(() => {
    if (!useCurrent) return;
    dispatch(setCurrentQuizzes(acid));
  }, [dispatch, useCurrent]);

  return (
    <ul className="cardList">
      {useCurrent.map((quiz) => (
        <Card key={quiz.id} quiz={quiz} />
      ))}
    </ul>
  );
};

export default CardList;
