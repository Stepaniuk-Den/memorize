import { useSelector } from "react-redux";
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

const CurrentQuizPage = () => {
  const useCurrentAnswers = useSelector(selectedCurrentAnswers);
  const useTotalQuizzes = useSelector(selectedTotalQuizzes);
  const useCurrentTest = useSelector(selectedCurrentTest);

  return (
    <div className="currentQuizPage">
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
