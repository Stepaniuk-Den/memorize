import Card from "../card/Card";
import "./cardList.scss";
import { acid } from "../../data/chemistry";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuizzes, setTotalQuizzes } from "../../redux/quizSlice";
import {
  selectedCurrentAnswers,
  selectedCurrentTest,
  selectedDisplayedQuizzes,
} from "../../redux/selectors";
import { useEffect } from "react";

const CardList = () => {
  const dispatch = useDispatch();

  const useCurrentTest = useSelector(selectedCurrentTest);
  const useCurrentAnswers = useSelector(selectedCurrentAnswers);
  const useDisplayedQuizzes = useSelector(selectedDisplayedQuizzes);

  // useEffect(() => {
  //   if (useCurrent.length > 0) return;
  //   !useCurrentAnswers?.length ? dispatch(setCurrentQuizzes(acid)) : null;
  //   dispatch(setTotalQuizzes(useCurrent.length));
  // }, [dispatch, useCurrent, useCurrentAnswers]);

  useEffect(() => {
    if (!useCurrentTest.length) return;
    dispatch(setTotalQuizzes(useCurrentTest.length));
  }, [dispatch, useCurrentTest, useCurrentAnswers]);

  return (
    <ul className="cardList">
      {useDisplayedQuizzes
        ? useDisplayedQuizzes.map((quiz) => <Card key={quiz.id} quiz={quiz} />)
        : useCurrent.map((quiz) => <Card key={quiz.id} quiz={quiz} />)}
    </ul>
  );
};

export default CardList;
