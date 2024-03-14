import Card from "../card/Card";
import "./cardList.scss";
import { acid } from "../../data/chemistry";

const CardList = () => {
  return (
    <ul className="cardList">
      {acid.map((quiz) => (
        <Card key={quiz.id} quiz={quiz} />
      ))}
    </ul>
  );
};

export default CardList;
