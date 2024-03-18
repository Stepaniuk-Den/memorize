import MuiPagination from "../../components/muiPagination/MuiPagination";
import CardList from "../../components/cardList/CardList";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <CardList />
      <MuiPagination />
    </div>
  );
};

export default HomePage;
