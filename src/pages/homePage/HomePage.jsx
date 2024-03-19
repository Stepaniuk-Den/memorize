import MuiPagination from "../../components/muiPagination/MuiPagination";
import CardList from "../../components/cardList/CardList";
import "./homePage.scss";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setHomePageHeight, setHomePageWidth } from "../../redux/quizSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const targetRef = useRef();

  useEffect(() => {
    if (!targetRef.current) return;
    dispatch(setHomePageWidth(targetRef.current.offsetWidth)),
      dispatch(setHomePageHeight(targetRef.current.offsetHeight));
  }, [dispatch]);

  return (
    <div className="homePage" ref={targetRef}>
      <CardList />
      <MuiPagination />
    </div>
  );
};

export default HomePage;
