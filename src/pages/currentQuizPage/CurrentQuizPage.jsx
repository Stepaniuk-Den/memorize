import { useDispatch, useSelector } from "react-redux";
import "./currentQuizPage.scss";
import {
  selectedCurrentAnswers,
  selectedCurrentTest,
  selectedTotalQuizzes,
} from "../../redux/selectors";
import SearchForm from "../../components/searchForm/SearchForm";
import CardList from "../../components/cardList/CardList";
import MuiPagination from "../../components/muiPagination/MuiPagination";
import ResultQuiz from "../../components/resultQuiz/ResultQuiz";
import { useEffect, useRef } from "react";
import { setHomePageHeight, setHomePageWidth } from "../../redux/quizSlice";

const CurrentQuizPage = () => {
  const dispatch = useDispatch();
  const targetRef = useRef();

  const useCurrentAnswers = useSelector(selectedCurrentAnswers);
  const useTotalQuizzes = useSelector(selectedTotalQuizzes);
  const useCurrentTest = useSelector(selectedCurrentTest);

  useEffect(() => {
    if (!targetRef.current) return;
    dispatch(setHomePageWidth(targetRef.current.offsetWidth)),
      dispatch(setHomePageHeight(targetRef.current.offsetHeight));
  }, [dispatch]);

  return (
    <div className="currentQuizPage" ref={targetRef}>
      {!useCurrentTest ? (
        <SearchForm />
      ) : useCurrentAnswers.length !== useTotalQuizzes ? (
        <>
          <CardList />
          <MuiPagination />
        </>
      ) : (
        <ResultQuiz />
      )}
    </div>
  );
};

export default CurrentQuizPage;
