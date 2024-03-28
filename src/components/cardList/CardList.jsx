import Card from "../card/Card";
import "./cardList.scss";
import { useSelector } from "react-redux";
import {
  selectedCurrentTest,
  selectedDisplayedQuizzes,
} from "../../redux/selectors";

const CardList = () => {
  const useCurrentTest = useSelector(selectedCurrentTest);
  const useDisplayedQuizzes = useSelector(selectedDisplayedQuizzes);

  return (
    <ul className="cardList">
      {useDisplayedQuizzes
        ? useDisplayedQuizzes.map((quiz) => <Card key={quiz.id} quiz={quiz} />)
        : useCurrentTest.map((quiz) => <Card key={quiz.id} quiz={quiz} />)}
    </ul>
  );
};

export default CardList;
