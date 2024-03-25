import MuiPagination from "../../components/muiPagination/MuiPagination";
import CardList from "../../components/cardList/CardList";
import "./homePage.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHomePageHeight, setHomePageWidth } from "../../redux/quizSlice";
import { selectedCurrent } from "../../redux/selectors";
import SearchForm from "../../components/searchForm/SearchForm";

const HomePage = () => {
  const dispatch = useDispatch();
  const targetRef = useRef();
  const useCurrent = useSelector(selectedCurrent);

  useEffect(() => {
    if (!targetRef.current) return;
    dispatch(setHomePageWidth(targetRef.current.offsetWidth)),
      dispatch(setHomePageHeight(targetRef.current.offsetHeight));
  }, [dispatch]);

  return (
    <div className="homePage" ref={targetRef}>
      {!useCurrent.test ? (
        <SearchForm />
      ) : (
        <>
          <CardList />
          <MuiPagination />
        </>
      )}
    </div>
  );
};

export default HomePage;
