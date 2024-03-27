import { useSelector } from "react-redux";
import "./currentQuizPage.scss";
import {
  selectedCurrent,
  selectedCurrentAnswers,
  selectedTotalQuizzes,
} from "../../redux/selectors";
import SearchForm from "../../components/searchForm/SearchForm";
import CardList from "../../components/cardList/CardList";
import MuiPagination from "../../components/muiPagination/MuiPagination";
import ResultQuiz from "../../components/resultQuiz/ResultQuiz";
import { useEffect } from "react";

const CurrentQuizPage = () => {
  const useCurrent = useSelector(selectedCurrent);
  const useCurrentAnswers = useSelector(selectedCurrentAnswers);
  const useTotalQuizzes = useSelector(selectedTotalQuizzes);

  useEffect(() => {
    console.log(useCurrentAnswers);
    console.log(useTotalQuizzes);
  }, [useCurrentAnswers, useTotalQuizzes]);

  return (
    <div className="currentQuizPage">
      {!useCurrent.test ? (
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
